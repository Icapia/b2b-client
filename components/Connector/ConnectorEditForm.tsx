import {
  Box,
  FormGroup,
  Grid,
  MenuItem,
  Select,
  TextField,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { ButtonTransparent } from "../Buttons";
import { ChangeEvent, FC, useState } from "react";
import { ConnectorT, ConnectorsType } from "../../types/site-types";

interface ConnectorEditFormI {
  price: number,
  siteId: string,
  chargePointHardwareId: string,
}

export const ConnectorEditForm: FC<ConnectorEditFormI> = ({
  chargePointHardwareId,
  price,
  siteId,
}) => {
  const [connector, setConnector] = useState<ConnectorT>({
    label: "",
    chargePointHardwareId: chargePointHardwareId,
    connectorId: 1,
    connectorTypeName: "Type 1",
    power: 0,
    price: price,
    chargePointId: 0,
    siteId: siteId,
  });

  const handlerSelectChange = (event: SelectChangeEvent<ConnectorsType>) => {
    const value = event.target.value as ConnectorsType
    setConnector({ ...connector, connectorTypeName: value });
  };

  const handlerChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setConnector({ ...connector, [event.target.name]: event.target.value });
  }  

  const handlerRemoveConnector = () => {}

  return (
    <Box
      className={"connector_edit_form"}
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <FormGroup className="">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <FormControl fullWidth className="mt-20">
              <InputLabel id="connector-label">Connector Type</InputLabel>
              <Select
                fullWidth
                style={{ backgroundColor: "#FAFAFA" }}
                label={"Connector Type"}
                labelId="connector-label"
                id="connector"
                name={"connectorTypeName"}
                value={connector?.connectorTypeName}
                defaultValue={"Type 1"}
                onChange={(event: SelectChangeEvent<ConnectorsType>) => handlerSelectChange(event)}
              >
                <MenuItem value={"Type 1"}>Type 1</MenuItem>
                <MenuItem value={"Type 2"}>Type 2</MenuItem>
                <MenuItem value={"Tesla"}>Tesla</MenuItem>
                <MenuItem value={"CHAdeMO"}>CHAdeMO</MenuItem>
                <MenuItem value={"CCS1"}>CCS1</MenuItem>
                <MenuItem value={"CCS2"}>CCS2</MenuItem>
              </Select>
            </FormControl>
            
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              value={connector?.label}
              className={"mt-20 col-6"}
              type={"number"}
              name={"label"}
              required={true}
              InputLabelProps={{ required: false }}
              label={"Connector ID"}
              placeholder={"5000"}
              onChange={(event) => handlerChange(event)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              value={connector?.price}
              className={"mt-20 flex-w"}
              type={"number"}
              name={"price"}
              required={true}
              InputLabelProps={{ required: false }}
              label={"Price, $/kWh"}
              placeholder={"0"}
              onChange={(event) => handlerChange(event)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              value={connector?.power}
              className={"mt-20 flex-w"}
              type={"number"}
              name={"power"}
              required={true}
              InputLabelProps={{ required: false }}
              label={"Power, kW"}
              placeholder={"0"}
              onChange={(event) => handlerChange(event)}
            />
          </Grid>
          <Grid item xs={6} className={"mt-20 flex-w"}>
            <ButtonTransparent 
              fullWidth
              onClick={handlerRemoveConnector}
            >
              <img style={{marginRight: '5px'}} src="/image/icons/trash.svg"/>
              Remove
            </ButtonTransparent>
          </Grid>
        </Grid>
      </FormGroup>
    </Box>
  );
};
