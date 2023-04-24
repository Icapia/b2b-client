import {
  Box,
  Divider,
  FormGroup,
  Grid,
  InputAdornment,
  MenuItem,
  Modal,
  Select,
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

  const {
    id,
    organizationId,
    name,
    zip_code,
    address,
    phone_number,
    default_price,
  } = props.data;

  const [form, setForm] = useState({
    organizationId,
    name,
    zip_code,
    address,
    phone_number,
    default_price,
  });
  const [formButton, setFormButton] = useState(true);

  const handlerChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });

    // if (form.site && form.site_area) {
    //   setFormButton(false);
    // }
  };

  console.log(props.data);

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
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <Select
              fullWidth
              sx={{ backgroundColor: "#FAFAFA" }}
              className={"mt-20 flex-w"}
              label={"Organization"}
              name={"organizationId"}
              value={form.organizationId}
              defaultValue={"Not set"}
              onChange={(event) => handlerChange(event)}
            >
              {props.organizations.map((e) => {
                return (
                  <MenuItem
                    key={e.id}
                    value={e.id}
                  >{`${e.id} ${e.name}`}</MenuItem>
                );
              })}
            </Select>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              value={form.name}
              className={"mt-20 flex-w"}
              type={"string"}
              focused={true}
              name={"name"}
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
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              value={form.zip_code}
              className={"mt-20 flex-w"}
              type={"string"}
              focused={true}
              name={"zip_code"}
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
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              value={form.address}
              className={"mt-20 flex-fw"}
              autoFocus={true}
              focused={true}
              name={"address"}
              required={true}
              InputLabelProps={{ required: false }}
              label={"Address"}
              placeholder={"Enter " + "address"}
              onChange={(event) => handlerChange(event)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              value={form.phone_number}
              className={"mt-20 flex-w"}
              type={"text"}
              focused={true}
              name={"phone_number"}
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
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              value={form.default_price}
              className={"mt-20 flex-w"}
              type={"number"}
              focused={true}
              name={"default_price"}
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
          </Grid>
        </Grid>
        <ButtonClose
          onClick={() => props.handleUpdateSite(id, form)}
          className={"mt-20 "}
          fullWidth
        >
          {`Update site`}
        </ButtonClose>
      </FormGroup>
    </Box>
  );
};
