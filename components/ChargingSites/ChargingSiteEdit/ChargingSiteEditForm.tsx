import {
  Box,
  FormControl,
  FormGroup,
  Grid,
  MenuItem,
  Select,
  TextField,
  InputLabel
} from "@mui/material";

import { ChangeEvent, FC } from "react";
import { Organization } from "../../../types/entities";
import { useAtom } from "jotai";
import { editSiteAtom } from "../../../store/site";

interface ChargingSiteEditFormI {
  organizations: Organization[],
}

export const ChargingSiteEditForm: FC<ChargingSiteEditFormI> = ({
  organizations,
}) => {
  const [form, setForm] = useAtom(editSiteAtom)

  const handlerChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <Box>
      <FormGroup className="modal__content-formGroup col-2 mt-20">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="organization-label">Organization</InputLabel>
              <Select
                sx={{ backgroundColor: 'white' }}
                displayEmpty
                labelId="organization-label"
                id="organization"
                name="organizationId"
                label="Organization"
                onChange={() => {}}
              > 
                {organizations?.length > 0 && (organizations?.map((e) => {
                  return (
                    <MenuItem
                      key={e.id}
                      value={e.id}
                    >{`${e.id} ${e.name}`}</MenuItem>
                  );
                }))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              value={form.site}
              className={"mt-20 flex-w"}
              type={"string"}
              focused={true}
              name={"name"}
              required={true}
              InputLabelProps={{ required: false }}
              label={"Site Name"}
              placeholder={`Enter Site Name`}
              onChange={handlerChange}
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
              onChange={handlerChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              value={form.site_area}
              className={"mt-20 flex-fw"}
              autoFocus={true}
              focused={true}
              name={"address"}
              required={true}
              InputLabelProps={{ required: false }}
              label={"Address"}
              placeholder={"Enter " + "address"}
              onChange={handlerChange}
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
              placeholder={"+1 111 111-11-11"}
              onChange={handlerChange}
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
              onChange={handlerChange}
            />
          </Grid>
        </Grid>
      </FormGroup>
    </Box>
  );
};
