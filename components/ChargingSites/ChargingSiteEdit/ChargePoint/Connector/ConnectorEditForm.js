import {
  Box,
  FormGroup,
  InputAdornment,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { ButtonClose, ButtonDefault } from "../../../../Buttons/Buttons";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import { GET_SITE_GQL } from "../../../../../graphql/gql/queries/sites-queries.gql";
import { UPDATE_CONNECTOR_GQL } from "../../../../../graphql/gql/mutations/connector-mutations.gql";

export const ConnectorEditForm = (props) => {
  const [message, setMessage] = useState({
    className: "messageBox",
    message: "",
  });

  const [form, setForm] = useState({ ...props.data });
  const [formButton, setFormButton] = useState(true);

  const handlerChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });

    // if (
    //   form.descriptionEn &&
    //   form.name &&
    //   form.priceD &&
    //   form.priceR &&
    //   form.descriptionRu
    // ) {
    //   setFormButton(false);
    // }
  };

  // console.log("JJJJJJJJJJJJJJJJJJJJJJJJJJ", props);

  const [mutationUpdateConnector, updateConnector] =
    useMutation(UPDATE_CONNECTOR_GQL);

  const handleUpdateConnector = async () => {
    await mutationUpdateConnector({
      refetchQueries: [
        {
          query: GET_SITE_GQL,
          variables: props.getSiteVariables,
        }, // DocumentNode object parsed with gql
        "GetSite", // Query name
      ],
      variables: {
        input: {
          id: parseInt(props.data.id),
          update: {
            connectorTypeName: form.connectorTypeName,
            price: parseFloat(form.price),
            power: parseFloat(form.power),
          },
        },
      },
    });
  };

  const handlerUpdate = () => {
    props.onChange({ ...form });
  };

  const handleMessage = () => {
    setMessage({
      className: "messageBox",
      message: "Test Message",
    });
  };

  return (
    <Box
      className={"connector_edit_form"}
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <FormGroup className="modal__content-formGroup col-2 mt-20">
        <Select
          className={"mt-20 flex-w"}
          label={"Connector Type"}
          name={"connectorTypeName"}
          value={form.connectorTypeName}
          defaultValue={"Type 1"}
          onChange={(event) => handlerChange(event)}
        >
          <MenuItem value={"Type 1"}>Type 1</MenuItem>
          <MenuItem value={"Type 2"}>Type 2</MenuItem>
          <MenuItem value={"Tesla"}>Tesla</MenuItem>
          <MenuItem value={"CHAdeMO"}>CHAdeMO</MenuItem>
          <MenuItem value={"CCS1"}>CCS1</MenuItem>
          <MenuItem value={"CCS2"}>CCS2</MenuItem>
        </Select>

        {/* <TextField
          autoComplete="off"
          value={form.connectorTypeName}
          className={"mt-20 flex-w"}
          type={"string"}
          focused={true}
          name={"connectorTypeName"}
          required={true}
          InputLabelProps={{ required: false }}
          label={"Connector Type"}
          placeholder={"1000"}
          onChange={(event) => handlerChange(event)}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">$</InputAdornment>
          //   ),
          // }}
        /> */}
        <TextField
          autoComplete="off"
          value={form.id}
          className={"mt-20 flex-w"}
          type={"number"}
          focused={true}
          name={"priceR"}
          required={true}
          InputLabelProps={{ required: false }}
          label={"Connector ID"}
          placeholder={"5000"}
          onChange={(event) => handlerChange(event)}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">₽</InputAdornment>
          //   ),
          // }}
        />

        <TextField
          autoComplete="off"
          value={form.price}
          className={"mt-20 flex-w"}
          type={"number"}
          focused={true}
          name={"price"}
          required={true}
          InputLabelProps={{ required: false }}
          label={"Price, $/kWh"}
          placeholder={"0"}
          onChange={(event) => handlerChange(event)}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">$</InputAdornment>
          //   ),
          // }}
        />
        <TextField
          autoComplete="off"
          value={form.power}
          className={"mt-20 flex-w"}
          type={"number"}
          focused={true}
          name={"power"}
          required={true}
          InputLabelProps={{ required: false }}
          label={"Power, kW"}
          placeholder={"0"}
          onChange={(event) => handlerChange(event)}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">₽</InputAdornment>
          //   ),
          // }}
        />

        {/* <TextField
          autoComplete="off"
          value={props.chargePointId}
          className={"mt-20 flex-fw"}
          autoFocus={true}
          focused={true}
          name={"name"}
          required={true}
          InputLabelProps={{ required: false }}
          label={"Charge Point"}
          placeholder={"Enter " + "subscribe name"}
          onChange={(event) => handlerChange(event)}
        /> */}
        <ButtonDefault onClick={handleUpdateConnector}>
          {(updateConnector.loading && `Loading...`) || `Save`}
        </ButtonDefault>
        <ButtonClose>Delete</ButtonClose>
      </FormGroup>
    </Box>
  );
};
