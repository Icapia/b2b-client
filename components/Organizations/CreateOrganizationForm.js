import {
  Box,
  FormGroup,
  Grid,
  InputAdornment,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import { ButtonClose, ButtonDefault, ButtonDelete } from "../Buttons/Buttons";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import { CREATE_ORGANIZATION_GQL } from "../../graphql/gql/mutations/organization-mutations.gql";
import { GET_ORGANIZATIONS_GQL } from "../../graphql/gql/queries/organizations-queries.gql";
import Message from "../Messages/Message";

export const CreateOrganizationForm = (props) => {
  const [message, setMessage] = useState({
    className: "messageBox",
    message: "",
  });

  const [form, setForm] = useState({});
  const [formButton, setFormButton] = useState(true);

  const handlerChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });

    if (
      // form.descriptionEn &&
      form.name &&
      form.address &&
      form.email &&
      form.zip_code &&
      form.phone_number
    ) {
      setFormButton(false);
    }
  };

  const [mutationCreateOrganization, createOrganization] = useMutation(
    CREATE_ORGANIZATION_GQL
  );

  const handlerUpdate = () => {
    props.onChange({ ...form });
  };

  const handleCreateOrganization = async () => {
    await mutationCreateOrganization({
      onCompleted: () => {
        props.handleClose();
      },
      refetchQueries: [
        {
          query: GET_ORGANIZATIONS_GQL,
          variables: {
            filter: {},
            sorting: [],
          },
        }, // DocumentNode object parsed with gql
        "GetOrganizations", // Query name
      ],
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
    });
  };

  const handleMessage = () => {
    setMessage({
      className: "messageBox",
      message: "Test Message",
    });
  };

  return (
    <Box>
      <h2>Add new organization</h2>
      {/* <h5>Notification:</h5>
      <p className="mt-10">
        After creating a user, login data will be sent to E-mail
      </p> */}
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
                autoComplete={false}
                className={"mt-20 flex-w"}
                type={"string"}
                focused={true}
                name={"name"}
                required={true}
                InputLabelProps={{ required: false }}
                label={"Organization Name"}
                placeholder={"Enter name"}
                onChange={(event) => handlerChange(event)}
                // InputProps={{
                //   startAdornment: (
                //     <InputAdornment position="start">$</InputAdornment>
                //   ),
                // }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                autoComplete={false}
                className={"mt-20 flex-w"}
                type={"number"}
                focused={true}
                name={"zip_code"}
                required={true}
                InputLabelProps={{ required: false }}
                label={"ZIP Code"}
                placeholder={"Enter zip code"}
                onChange={(event) => handlerChange(event)}
                // InputProps={{
                //   startAdornment: (
                //     <InputAdornment position="start">₽</InputAdornment>
                //   ),
                // }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                autoComplete={false}
                className={"mt-20 flex-fw"}
                autoFocus={true}
                focused={true}
                name={"address"}
                required={true}
                InputLabelProps={{ required: false }}
                label={"Organization Address"}
                placeholder={"Enter " + "address"}
                onChange={(event) => handlerChange(event)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                autoComplete={false}
                className={"mt-20 flex-w"}
                type={"string"}
                focused={true}
                name={"phone_number"}
                required={true}
                InputLabelProps={{ required: false }}
                label={"Phone Number"}
                placeholder={"Enter phone"}
                onChange={(event) => handlerChange(event)}
                // InputProps={{
                //   startAdornment: (
                //     <InputAdornment position="start">$</InputAdornment>
                //   ),
                // }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                autoComplete={false}
                className={"mt-20 flex-w"}
                type={"email"}
                focused={true}
                name={"email"}
                required={true}
                InputLabelProps={{ required: false }}
                label={"E-mail"}
                placeholder={"Enter email"}
                onChange={(event) => handlerChange(event)}
                // InputProps={{
                //   startAdornment: (
                //     <InputAdornment position="start">₽</InputAdornment>
                //   ),
                // }}
              />
            </Grid>
          </Grid>
        </FormGroup>
      </div>
      <Message
        className={message.className}
        message={message.message}
      ></Message>
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
          onClick={props.handleClose}
          minRows={5}
        >
          Cancel
        </ButtonClose>

        <ButtonDefault
          disabled={false}
          className={"mt-20 flex-fw"}
          fullWidth={false}
          onClick={handleCreateOrganization}
          minRows={5}
        >
          {(createOrganization.loading && "Loading...") || "Create"}
        </ButtonDefault>
      </Stack>
    </Box>
  );
};
