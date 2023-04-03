import {
  Box,
  FormGroup,
  InputAdornment,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

export function ChargePointEditForm({ data }) {
  const { chargePointHardwareId } = data;

  const [form, setForm] = useState({ chargePointHardwareId });
  const [formButton, setFormButton] = useState(true);

  // console.log("ChargePointEditForm", chpid);

  const handlerChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });

    if (form.chpid) {
      setFormButton(false);
    }
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
    </FormGroup>
  );
}
