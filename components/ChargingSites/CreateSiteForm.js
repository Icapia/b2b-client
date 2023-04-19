import {
  Box,
  FormGroup,
  InputAdornment,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import { ButtonClose, ButtonDefault, ButtonDelete } from "../Buttons/Buttons";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import { CREATE_SITE_GQL } from "../../graphql/gql/mutations/site-mutations.gql";
import { GET_SITES_GQL } from "../../graphql/gql/queries/sites-queries.gql";
import Message from "../Messages/Message";

export const CreateSiteForm = (props) => {
  const [message, setMessage] = useState({
    className: "messageBox",
    message: "",
  });

  const [form, setForm] = useState({});
  const [formButton, setFormButton] = useState(true);

  const handlerChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });

    // if (
    //   // form.descriptionEn &&
    //   form.name &&
    //   form.address &&
    //   form.email &&
    //   form.zip_code &&
    //   form.phone_number
    // ) {
    //   setFormButton(false);
    // }
  };

  const [mutationCreateSite, createSite] = useMutation(CREATE_SITE_GQL);

  const handlerUpdate = () => {
    props.onChange({ ...form });
  };

  const handleCreateSite = async () => {
    await mutationCreateSite({
      onCompleted: () => {
        props.handleClose();
      },
      refetchQueries: [
        {
          query: GET_SITES_GQL,
          variables: {
            filter: {},
            sorting: [],
            chargePointFilter: {},
            chargePointSorting: [],
            connectorFilter: {},
            connectorSorting: [],
          },
        }, // DocumentNode object parsed with gql
        "GetSites", // Query name
      ],
      variables: {
        input: {
          site: {
            name: form.name,
            site_area: form.site_area,
            address: form.address,
            zip_code: parseInt(form.zip_code),
            location: {
              type: "Point",
              coordinates: [parseFloat(form.long), parseFloat(form.lat)],
            },
            site: "",
            information: "",
            dynamic_asset: "",
            asset_type: "",
            instant_power: 0,
            battery: "",
            default_price: parseFloat(form.default_price),
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
      <h2>Add new Site</h2>
      <h5>Notification:</h5>
      <p className="mt-10">
        After creating a user, login data will be sent to E-mail
      </p>
      <div className="modal__content-form modal__content-form--fullw mxw-700">
        <FormGroup className="modal__content-formGroup col-2 mt-20">
          <TextField
            autoComplete={false}
            className={"mt-20 flex-w"}
            type={"string"}
            focused={true}
            name={"name"}
            required={true}
            InputLabelProps={{ required: false }}
            label={"Site Name"}
            placeholder={"Enter name"}
            onChange={(event) => handlerChange(event)}
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">$</InputAdornment>
            //   ),
            // }}
          />
          <TextField
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

          <TextField
            autoComplete={false}
            className={"mt-20 flex-fw"}
            autoFocus={true}
            focused={true}
            name={"address"}
            required={true}
            InputLabelProps={{ required: false }}
            label={"Site Address"}
            placeholder={"Enter " + "address"}
            onChange={(event) => handlerChange(event)}
          />

          <TextField
            autoComplete={false}
            className={"mt-20 flex-w"}
            type={"number"}
            focused={true}
            name={"long"}
            required={true}
            InputLabelProps={{ required: false }}
            label={"Longitude"}
            placeholder={"180, 00000000"}
            onChange={(event) => handlerChange(event)}
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">$</InputAdornment>
            //   ),
            // }}
          />
          <TextField
            autoComplete={false}
            className={"mt-20 flex-w"}
            type={"number"}
            focused={true}
            name={"lat"}
            required={true}
            InputLabelProps={{ required: false }}
            label={"Latitude"}
            placeholder={"90, 00000000"}
            onChange={(event) => handlerChange(event)}
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">₽</InputAdornment>
            //   ),
            // }}
          />

          <TextField
            autoComplete={false}
            className={"mt-20 flex-w"}
            type={"string"}
            focused={true}
            name={"site_area"}
            required={true}
            InputLabelProps={{ required: false }}
            label={"Site area"}
            placeholder={"Enter Site area"}
            onChange={(event) => handlerChange(event)}
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">$</InputAdornment>
            //   ),
            // }}
          />
          <TextField
            autoComplete={false}
            className={"mt-20 flex-w"}
            type={"number"}
            focused={true}
            name={"default_price"}
            required={true}
            InputLabelProps={{ required: false }}
            label={"Default price"}
            placeholder={"0.00"}
            onChange={(event) => handlerChange(event)}
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">₽</InputAdornment>
            //   ),
            // }}
          />
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
          onClick={handleCreateSite}
          minRows={5}
        >
          {(createSite.loading && "Loading...") || "Create"}
        </ButtonDefault>
      </Stack>
    </Box>
  );
};
