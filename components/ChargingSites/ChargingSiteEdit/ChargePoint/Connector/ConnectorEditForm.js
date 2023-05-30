import {
  Box,
  FormGroup,
  Grid,
  MenuItem,
  Select,
  TextField,
  FormControl,
  InputLabel,
} from "@mui/material";
import { ButtonBlack, ButtonClose, ButtonDefault, ButtonTransparent } from "../../../../Buttons/Buttons";
import { useMutation } from "@apollo/client";
import { useState } from "react";

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
  };

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
      <FormGroup className="">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <FormControl fullWidth className="mt-20">
              <InputLabel id="connector-label">Connector Type</InputLabel>
              <Select
                fullWidth
                style={{ backgroundColor: "#FAFAFA" }}
                label={"Connector Type"}
                labelId="connector-label"
                id="connector"
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
            </FormControl>
            
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              autoComplete={false}
              value={form.id}
              className={"mt-20 col-6"}
              type={"number"}
              focused={true}
              name={"priceR"}
              required={true}
              InputLabelProps={{ required: false }}
              label={"Connector ID"}
              placeholder={"5000"}
              onChange={(event) => handlerChange(event)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              autoComplete={false}
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
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              autoComplete={false}
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
            />
          </Grid>
          <Grid item xs={6} className={"mt-20 flex-w"}>
            <ButtonBlack fullWidth onClick={handleUpdateConnector}>
              {(updateConnector.loading && `Loading...`) || `Save`}
            </ButtonBlack>
          </Grid>
          <Grid item xs={6} className={"mt-20 flex-w"}>
            <ButtonTransparent fullWidth>
              <img style={{marginRight: '5px'}} src="/image/icons/trash.svg"/>
              Remove
            </ButtonTransparent>
          </Grid>
        </Grid>
      </FormGroup>
    </Box>
  );
};
