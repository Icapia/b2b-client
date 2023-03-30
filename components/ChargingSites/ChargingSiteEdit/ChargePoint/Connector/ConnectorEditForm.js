import {
  Box,
  FormGroup,
  InputAdornment,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

export const ConnectorEditForm = (props) => {
  const [message, setMessage] = useState({
    className: "messageBox",
    message: "",
  });

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
        <TextField
          autoComplete="off"
          className={"mt-20 flex-w"}
          type={"string"}
          focused={true}
          name={"priceD"}
          required={true}
          InputLabelProps={{ required: false }}
          label={"Organization Name"}
          placeholder={"1000"}
          onChange={(event) => handlerChange(event)}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">$</InputAdornment>
          //   ),
          // }}
        />
        <TextField
          autoComplete="off"
          className={"mt-20 flex-w"}
          type={"number"}
          focused={true}
          name={"priceR"}
          required={true}
          InputLabelProps={{ required: false }}
          label={"ZIP Code"}
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
          className={"mt-20 flex-w"}
          type={"number"}
          focused={true}
          name={"priceD"}
          required={true}
          InputLabelProps={{ required: false }}
          label={"Phone Number"}
          placeholder={"1000"}
          onChange={(event) => handlerChange(event)}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">$</InputAdornment>
          //   ),
          // }}
        />
        <TextField
          autoComplete="off"
          className={"mt-20 flex-w"}
          type={"email"}
          focused={true}
          name={"priceR"}
          required={true}
          InputLabelProps={{ required: false }}
          label={"E-mail"}
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
    </Box>
  );
};
