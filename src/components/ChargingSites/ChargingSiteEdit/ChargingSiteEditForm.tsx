import {
  Box,
  FormControl,
  FormGroup,
  Grid,
  MenuItem,
  Select,
  TextField,
  InputLabel,
  SelectChangeEvent,
  InputAdornment,
  OutlinedInput
} from "@mui/material";

import { ChangeEvent, FC, useEffect, useState } from "react";
import { Organization } from "../../../types/entities";
import { useAtom } from "jotai";
import styles from './index.module.scss'
import { siteAtom } from "@/store/edit-site";

interface ChargingSiteEditFormI {
  organizations: Organization[],
}

export const ChargingSiteEditForm: FC<ChargingSiteEditFormI> = ({
  organizations,
}) => {
  const [form, setForm] = useAtom(siteAtom)

  const handlerChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handlerChangeSelect = (event: SelectChangeEvent<number>) => {
    const value = event?.target?.value as string || null;
    setForm({ ...form, organizationId: value });
  };

  return (
    <Box className={styles.container}>
      <FormGroup className="modal__content-formGroup col-2">
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
                autoFocus
                value={parseInt(form.organizationId ?? '')}
                onChange={(e: SelectChangeEvent<number>) => {handlerChangeSelect(e)}}
              > 
                {organizations?.length > 0 && (organizations?.map((e) => {
                  return (
                    <MenuItem
                      key={e.id}
                      value={e.id}
                    >{e.name}</MenuItem>
                  );
                }))}
              </Select>
            </FormControl>
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
              placeholder={"94540"}
              onChange={handlerChange}
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
              placeholder={"Enter Site Address"}
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
            <FormControl focused fullWidth className="mt-20">
              <InputLabel htmlFor="default_price">Default price, $/kWh</InputLabel>
              <OutlinedInput
                value={form.default_price}
                type={"number"}
                name={"default_price"}
                label={"Default price, $/kWh"}
                placeholder={"0.0"}
                endAdornment={<InputAdornment position="end">$/kWh</InputAdornment>}
                onChange={handlerChange}
              />
            </FormControl>
          </Grid>
        </Grid>
      </FormGroup>
    </Box>
  );
};
