import {
  Box,
  FormGroup,
  Stack,
  TextField,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { ButtonClose, ButtonDefault } from "../Buttons";

export const CreateChargingSitesForm = () => {
  const [message, setMessage] = useState({
    className: "messageBox",
    message: "",
  });

  const [form, setForm] = useState({});
  const [formButton, setFormButton] = useState(true);

  const handlerChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handlerUpdate = () => {
    // props.onChange({ ...form });
  };

  const handlerCreate = () => {}

  const handlerClose = () => {}

  return (
    <Box style={{ backgroundColor: "#fff" }}>
      <p className="mt-10">
        After creating a user, login data will be sent to E-mail
      </p>
      <div className="modal__content-form modal__content-form--fullw mxw-700">
        <FormGroup className="modal__content-formGroup col-2 mt-20">
          <TextField
            className={"mt-20 flex-w"}
            type={"string"}
            focused={true}
            name={"priceD"}
            required={true}
            InputLabelProps={{ required: false }}
            label={"Organization Name"}
            placeholder={"1000"}
            onChange={(event) => handlerChange(event)}
          />
          <TextField
            className={"mt-20 flex-w"}
            type={"number"}
            focused={true}
            name={"priceR"}
            required={true}
            InputLabelProps={{ required: false }}
            label={"ZIP Code"}
            placeholder={"5000"}
            onChange={(event) => handlerChange(event)}
          />

          <TextField
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
            className={"mt-20 flex-w"}
            type={"number"}
            focused={true}
            name={"priceD"}
            required={true}
            InputLabelProps={{ required: false }}
            label={"Phone Number"}
            placeholder={"1000"}
            onChange={(event) => handlerChange(event)}
          />
          <TextField
            className={"mt-20 flex-w"}
            type={"email"}
            focused={true}
            name={"priceR"}
            required={true}
            InputLabelProps={{ required: false }}
            label={"E-mail"}
            placeholder={"5000"}
            onChange={(event) => handlerChange(event)}
          />
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
          Create
        </ButtonDefault>
      </Stack>
    </Box>
  );
};
