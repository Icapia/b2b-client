import {
  Box,
  FormGroup,
  Grid,
  InputAdornment,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import { ButtonClose, ButtonDefault, ButtonDelete } from "../Buttons";
import { gql, useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";

import { CREATE_ORGANIZATION_GQL } from "../../graphql/gql/mutations/organization-mutations.gql";
import { GET_ORGANIZATIONS_GQL } from "../../graphql/gql/queries/organizations-queries.gql";
import { snackbarState } from "../../store/snackbar";
import { useAtom } from "jotai";
import { OrganizationCreateForm } from "../../types/organization-types";
import { organizationCreateAtom, updateOrganizationRequest } from "../../store/organization";

export const CreateOrganizationForm = () => {
  const [, setIsOpen] = useAtom(organizationCreateAtom)
  const [update, setUpdate] = useAtom(updateOrganizationRequest)
  const [form, setForm] = useState<OrganizationCreateForm>({
    address: "",
    email: "",
    name: "",
    zip_code: "",
    phone_number: "",
  });
  const [, setSnackbar] = useAtom(snackbarState)

  const [mutationCreateOrganization, createOrganization] = useMutation(
    CREATE_ORGANIZATION_GQL,
  );

  const handlerChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name;
    setForm({...form, [name]: event.target.value})
  }

  const handlerClose = () => {
    setIsOpen(false)
  }

  const handlerCreate = async () => {
    await mutationCreateOrganization({
      onCompleted: () => {
        handlerClose()
        setSnackbar({
          message: "Organization Created",
          type: "success"
        })
      },
      onError: (e) => {
        setSnackbar({
          message: e?.message,
          type: "error"
        })
      },
      variables: {
        input: {
          organization: {
            ...form,
            zip_code: parseInt(form.zip_code),
            location: {
              type: "Point",
              coordinates: [0, 0],
            },
          },
        },
      },
      refetchQueries: () => [{
        query: GET_ORGANIZATIONS_GQL,
        variables: {
          filter: {},
          sorting: [],
        },
      }]
    });

    setUpdate(!update)
  }

  return (
    <Box>
      <h2>Add new organization</h2>
      <h5>Notification:</h5>
      <p>
        After creating a user, login data will be sent to E-mail
      </p>
      <div className="modal__content-form modal__content-form--fullw mxw-700">
        <FormGroup className="modal__content-formGroup col-2 mt-20">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <TextField
                fullWidth
                className={"mt-20 flex-w"}
                type={"string"}
                focused={true}
                name={"name"}
                required={true}
                InputLabelProps={{ required: false }}
                label={"Organization Name"}
                placeholder={"Enter name"}
                onChange={handlerChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                className={"mt-20 flex-w"}
                type={"number"}
                focused={true}
                name={"zip_code"}
                required={true}
                InputLabelProps={{ required: false }}
                label={"ZIP Code"}
                placeholder={"Enter zip code"}
                onChange={handlerChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                className={"mt-20 flex-fw"}
                autoFocus={true}
                focused={true}
                name={"address"}
                required={true}
                InputLabelProps={{ required: false }}
                label={"Organization Address"}
                placeholder={"Enter " + "address"}
                onChange={handlerChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                className={"mt-20 flex-w"}
                type={"string"}
                focused={true}
                name={"phone_number"}
                required={true}
                InputLabelProps={{ required: false }}
                label={"Phone Number"}
                placeholder={"Enter phone"}
                onChange={handlerChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                className={"mt-20 flex-w"}
                type={"email"}
                focused={true}
                name={"email"}
                required={true}
                InputLabelProps={{ required: false }}
                label={"E-mail"}
                placeholder={"Enter email"}
                onChange={handlerChange}
              />
            </Grid>
          </Grid>
        </FormGroup>
      </div>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <ButtonClose
          disabled={false}
          className={"mt-20 flex-fw"}
          fullWidth={false}
          onClick={handlerClose}
        >
          Cancel
        </ButtonClose>

        <ButtonDefault
          disabled={false}
          className={"mt-20 flex-fw"}
          fullWidth={false}
          onClick={handlerCreate}
        >
          {(createOrganization.loading && "Loading...") || "Create"}
        </ButtonDefault>
      </Stack>
    </Box>
  );
};
