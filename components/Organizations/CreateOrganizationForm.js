import {
  Box,
  FormGroup,
  InputAdornment,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import { ButtonClose, ButtonDefault, ButtonDelete } from "../Buttons/Buttons";
import { useEffect, useState } from "react";

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
    <Box>
      <h2>Add new organization</h2>
      <h5>Notification:</h5>
      <p className="mt-10">
        After creating a user, login data will be sent to E-mail
      </p>
      <div className="modal__content-form modal__content-form--fullw mxw-700">
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

          {/* <TextField
            autoComplete="off"
            className={"mt-20 flex-fw"}
            fullWidth={true}
            focused={true}
            multiline={true}
            minRows={5}
            name={"descriptionEn"}
            required={true}
            InputLabelProps={{ required: false }}
            label={"Subscribe Description (EN)"}
            placeholder={"Chat with someone who likes you too!"}
            onChange={(event) => handlerChange(event)}
          />
          <TextField
            autoComplete="off"
            className={"mt-20 flex-fw"}
            fullWidth={true}
            focused={true}
            required={true}
            multiline={true}
            minRows={5}
            name={"descriptionRu"}
            InputLabelProps={{ required: false }}
            label={"Subscribe Description (RU)"}
            placeholder={"Chat with someone who likes you too!"}
            onChange={(event) => handlerChange(event)}
          /> */}
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
          onClick={handleMessage}
          minRows={5}
        >
          Create
        </ButtonDefault>
      </Stack>
    </Box>
  );
};
