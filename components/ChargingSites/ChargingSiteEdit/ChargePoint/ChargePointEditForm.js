import {
  Box,
  FormGroup,
  InputAdornment,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

export function ChargePointEditForm(props) {
  const [form, setForm] = useState({});
  const [formButton, setFormButton] = useState(true);

  const handlerChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });

    if (
      form.descriptionEn &&
      form.name &&
      form.priceD &&
      form.priceR &&
      form.descriptionRu
    ) {
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
        className={"mt-20 flex-fw"}
        autoFocus={true}
        focused={true}
        name={"name"}
        required={true}
        InputLabelProps={{ required: false }}
        label={"Organization Address"}
        placeholder={"Enter " + "subscribe name"}
        onChange={(event) => handlerChange(event)}
      />

      <TextField
        autoComplete="off"
        className={"mt-20 flex-fw"}
        autoFocus={true}
        focused={true}
        name={"name"}
        required={true}
        InputLabelProps={{ required: false }}
        label={"Organization Address"}
        placeholder={"Enter " + "subscribe name"}
        onChange={(event) => handlerChange(event)}
      />
    </FormGroup>
  );
}
