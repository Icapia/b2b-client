import {
  Box,
  Divider,
  FormGroup,
  InputAdornment,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import {
  ButtonClose,
  ButtonDefault,
  ButtonDelete,
} from "../../Buttons/Buttons";
import { useEffect, useState } from "react";

import Message from "../../Messages/Message";

export const ChargingSiteEditForm = (props) => {
  const [message, setMessage] = useState({
    className: "messageBox",
    message: "",
  });

  const { id, site, site_area } = props.data;

  const [form, setForm] = useState({ id, site, site_area });
  const [formButton, setFormButton] = useState(true);

  const handlerChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });

    if (form.site && form.site_area) {
      setFormButton(false);
    }
  };

  // console.log(form);

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
      <FormGroup className="modal__content-formGroup col-2 mt-20">
        <TextField
          autoComplete={false}
          value={"test name1"}
          className={"mt-20 flex-fw"}
          autoFocus={true}
          focused={true}
          name={"site"}
          required={true}
          InputLabelProps={{ required: false }}
          label={"Organization"}
          placeholder={"Enter " + "Organization"}
          onChange={(event) => handlerChange(event)}
        />
        <TextField
          autoComplete={false}
          value={form.site}
          className={"mt-20 flex-w"}
          type={"string"}
          focused={true}
          name={"site"}
          required={true}
          InputLabelProps={{ required: false }}
          label={"Site Name"}
          placeholder={`Enter Site Name`}
          onChange={(event) => handlerChange(event)}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">$</InputAdornment>
          //   ),
          // }}
        />
        <TextField
          autoComplete={false}
          value={form.site}
          className={"mt-20 flex-w"}
          type={"string"}
          focused={true}
          name={"site"}
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
          autoComplete={false}
          value={form.site_area}
          className={"mt-20 flex-fw"}
          autoFocus={true}
          focused={true}
          name={"site_area"}
          required={true}
          InputLabelProps={{ required: false }}
          label={"Site Address"}
          placeholder={"Enter " + "subscribe name"}
          onChange={(event) => handlerChange(event)}
        />

        <TextField
          autoComplete={false}
          value={8333442332}
          className={"mt-20 flex-w"}
          type={"number"}
          focused={true}
          name={"priceD"}
          required={true}
          InputLabelProps={{ required: false }}
          label={"Phone Number (optional)"}
          placeholder={"1000"}
          onChange={(event) => handlerChange(event)}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">$</InputAdornment>
          //   ),
          // }}
        />
        <TextField
          autoComplete={false}
          value={0.17}
          className={"mt-20 flex-w"}
          type={"email"}
          focused={true}
          name={"priceR"}
          required={true}
          InputLabelProps={{ required: false }}
          label={"Default price, $/kWh"}
          placeholder={"5000"}
          onChange={(event) => handlerChange(event)}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">₽</InputAdornment>
          //   ),
          // }}
        />

        {/* <TextField
            autoComplete={false}
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
            autoComplete={false}
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
    </Box>
  );
};
