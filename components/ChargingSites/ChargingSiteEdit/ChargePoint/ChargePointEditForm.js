import {
  Box,
  FormGroup,
  InputAdornment,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import { ButtonClose } from "../../../Buttons/Buttons";
import { GET_SITE_GQL } from "../../../../graphql/gql/queries/sites-queries.gql";
import { UPDATE_CHARGE_POINT_GQL } from "../../../../graphql/gql/mutations/charge-point-mutations.gql";

export function ChargePointEditForm(props) {
  const { chargePointHardwareId, id } = props.data;

  const [form, setForm] = useState({ chargePointHardwareId });
  const [formButton, setFormButton] = useState(true);

  // console.log("ChargePointEditForm", chpid);

  const handlerChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });

    if (form.chpid) {
      setFormButton(false);
    }
  };

  const [mutationUpdateChargePoint, updateChargePoint] = useMutation(
    UPDATE_CHARGE_POINT_GQL
  );

  const handleUpdateChargePoint = async () => {
    await mutationUpdateChargePoint({
      refetchQueries: [
        {
          query: GET_SITE_GQL,
          variables: props.getSiteVariables,
        }, // DocumentNode object parsed with gql
        "GetSite", // Query name
      ],
      variables: {
        input: {
          id: parseInt(id),
          update: {
            chargePointHardwareId: form.chargePointHardwareId,
          },
        },
      },
    });
  };

  const handlerUpdate = () => {
    props.onChange({ ...form });
  };

  return (
    <FormGroup className="modal__content-formGroup col-2">
      <TextField
        autoComplete="off"
        value={form.chargePointHardwareId}
        className={"mt-20 flex-fw"}
        autoFocus={true}
        focused={true}
        name={"chargePointHardwareId"}
        required={true}
        InputLabelProps={{ required: false }}
        label={"Charge point ID"}
        placeholder={"Enter " + "Charge point HARDWARE ID"}
        onChange={(event) => handlerChange(event)}
      />

      <TextField
        autoComplete="off"
        value={`https://icapia-ev-b2b.com/charge-point2323`}
        className={"mt-20 flex-fw"}
        autoFocus={true}
        focused={true}
        name={"name"}
        required={true}
        InputLabelProps={{ required: false }}
        label={"OCPP Endpoint "}
        placeholder={"Enter " + "subscribe name"}
        onChange={(event) => handlerChange(event)}
      />
      <ButtonClose onClick={handleUpdateChargePoint}>Save</ButtonClose>
    </FormGroup>
  );
}
