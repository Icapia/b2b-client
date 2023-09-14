import { siteAtom } from "@/store/edit-site"
import {
  Box,
  FormControl,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from "@mui/material"
import { useAtom } from "jotai"
import { ChangeEvent, FC } from "react"
import { ChargePointT, ConnectorT, ConnectorsType } from "../../types/site-types"
import { ButtonRedTransparent } from "../Buttons"
import { Input } from '../UI/Input/Input'

interface ConnectorEditFormI {
  connectorId: number,
  price: number,
  chargepoint: ChargePointT,
  connector: ConnectorT,
  onRemove: (id: number) => void
  onChangeLabel: (id: number, value: string) => void
  onChangePriceOrPower: (id: number, value: number, name: "power" | "price") => void
  onChangeType: (id: number, type: ConnectorsType) => void
}

export const ConnectorEditForm: FC<ConnectorEditFormI> = ({
  chargepoint,
  connectorId,
  connector,
  price,
  onRemove,
  onChangeLabel, 
  onChangePriceOrPower,
  onChangeType,
}) => {
  const [form, setForm] = useAtom(siteAtom)

  const handlerSelectChange = (event: SelectChangeEvent<ConnectorsType>) => {
    const value = event.target.value as ConnectorsType

    onChangeType(connectorId, value)
  };

  const handlerChangeLabel = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChangeLabel(connectorId, event.target.value)
  }  

  const handlerChangePriceOrPower = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name as "price" | "power"
    const value = parseFloat(event.target.value)

    onChangePriceOrPower(connectorId, value, name)
  }  

  const handlerRemoveConnector = (id: number) => {
    onRemove(id)
  }

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
                style={{ backgroundColor: "#FFFFFF" }}
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
            <Input
              value={connector?.label}
              type='string'
              name='label'
              label='Connector Label'
              placeholder='Enter Label'
              onChange={handlerChangeLabel}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              value={connector?.price}
              type='number'
              name='price'
              label='Price, $/kWh'
              placeholder='0.0'
              onChange={handlerChangePriceOrPower}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              value={connector?.power}
              type='number'
              name='power'
              label='Power, kW'
              placeholder='0.0'
              onChange={handlerChangePriceOrPower}
            />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <ButtonRedTransparent 
              onClick={() => {handlerRemoveConnector(connectorId)}}
            >
              <img style={{marginRight: '5px'}} src="/image/icons/trash.svg"/>
              Remove
            </ButtonRedTransparent>
          </Grid>
        </Grid>
      </FormGroup>
    </Box>
  );
};
