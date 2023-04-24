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
import {
  GET_ORGANIZATIONS_GQL,
  GET_ORGANIZATION_GQL,
} from "../../graphql/gql/queries/organizations-queries.gql";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import Message from "../Messages/Message";
import { UPDATE_ORGANIZATION_GQL } from "../../graphql/gql/mutations/organization-mutations.gql";

export const EditOrganizationForm = (props) => {
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

  const organization = useQuery(GET_ORGANIZATION_GQL, {
    onCompleted: (data) => {
      setForm(data.organization);
    },
    variables: {
      id: props.id,
    },
  });

  const [mutationUpdateOrganization, updateOrganization] = useMutation(
    UPDATE_ORGANIZATION_GQL
  );

  const handlerUpdate = () => {
    props.onChange({ ...form });
  };

  const handleUpdateOrganization = async () => {
    await mutationUpdateOrganization({
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
          id: parseInt(props.id),
          update: {
            name: form.name,
            email: form.email,
            phone_number: form.phone_number,
            address: form.address,
            zip_code: parseInt(form.zip_code),
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
      <h2>Edit organization</h2>
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
                value={form.name}
                // autoComplete={false}
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
                value={form.zip_code}
                // autoComplete={false}
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
                value={form.address}
                // autoComplete={false}
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
                value={form.phone_number}
                // autoComplete={false}
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
                value={form.email}
                // autoComplete={false}
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
          onClick={handleUpdateOrganization}
          minRows={5}
        >
          {(updateOrganization.loading && "Loading...") || "Create"}
        </ButtonDefault>
      </Stack>
    </Box>
  );
};

// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:4200/users`);
//   const users = await res.json();

//   return {
//     props: {
//       users: users,
//     },
//   };
// }
