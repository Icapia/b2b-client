import Box from "@mui/material/Box";
import { ButtonClose } from "../Buttons";
import { ConnectorEditForm } from "./ConnectorEditForm";
import { FC, useEffect, useState } from "react";
import { ChargePointT, ConnectorT, ConnectorsType } from "../../types/site-types";
import { useAtom } from "jotai";
import { snackbarState } from "../../store/snackbar";
import { siteAtom } from "@/store/edit-site";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

interface ConnectorEditWrapI {
  chargepoint: ChargePointT,
  chargepointId: number,
  price?: number,
}

export const ConnectorsEditWrap: FC<ConnectorEditWrapI> = ({
  chargepoint,
  chargepointId,
  price = 0
}) => {
  const [form, setForm] = useAtom(siteAtom)
  const [snackbar, setSnackbar] = useAtom(snackbarState)
  const [isRemove, setIsRemove] = useState(false)
  const [connectors, setConnectors] = useState<ConnectorT[]>(chargepoint?.connectors || [])
  const [deleteId, setDeleteId] = useState(0);

  const handlerAddNewConnector = () => {
    const index = chargepoint.connectors?.length || 0;
    const connector: ConnectorT = {
      id: null,
      label: "",
      chargePointHardwareId: chargepoint?.chargePointHardwareId,
      connectorId: index + 1,
      connectorTypeName: "Type 1",
      chargePointId: chargepoint?.id || null,
      power: 0,
      price: form?.default_price,
      siteId: form.id || null,
    }

    const array = Array.from(connectors)
    array.push(connector)
    setConnectors(array)
  }

  const handlerRemoveConnector = (id: number) => {
    setIsRemove(true)
    setDeleteId(id)
  }

  const handleRemove = () => {
    const filtered = Array.from(connectors).filter((el, index) => {
      return index !== deleteId
    })

    setConnectors(filtered)
    setIsRemove(false)
  }

  const handlerChangeLabel = (
    id: number, 
    value: string
  ) => {
    const array = [...connectors]
    array[id].label = value

    setConnectors(array)
  }

  const handlerChangeType = (
    id: number, 
    value: ConnectorsType
  ) => {
    const array = [...connectors]
    array[id].connectorTypeName = value

    setConnectors(array)
  }

  const handlerChangePriceOrPower = (
    id: number, 
    value: number,
    name: 'price' | 'power'
  ) => {
    const array = [...connectors]

    if(name === 'price') {
      array[id].price = value
    } 

    if(name === "power") {
      array[id].power = value
    }

    setConnectors(array)
  }

  const handleClose = () => {
    setIsRemove(false)
  }

  useEffect(() => {
    const chargepoints = form?.chargePoints || [];
    const array = [...chargepoints]

    console.log('Before', array, chargepointId)
    console.log('Connectors', connectors)

    array.map((el, index) => {
      if(index === chargepointId) {
        return {...el, connectors: connectors}
      }

      return el
    })

    console.log('After', array)

    setForm({...form, chargePoints: array})
  }, [connectors])


  return (
    <Box sx={{ flexGrow: 1 }}>
      <div>
        {connectors?.map((connector, index) => {
          return (
            <Box key={index}>
              <ConnectorEditForm
                connectorId={index}
                connector={connector}
                chargepoint={chargepoint}
                price={price}
                onRemove={handlerRemoveConnector}
                onChangeLabel={(id: number, value: string) => {handlerChangeLabel(id, value)}}
                onChangePriceOrPower={(id: number, value: number, name: 'price' | 'power') => {handlerChangePriceOrPower(id, value, name)}}
                onChangeType={(id: number, value: ConnectorsType) => {handlerChangeType(id, value)}}
              />
            </Box>
          );
        })}
      </div>
      
      <Dialog
        open={isRemove}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Remove connector"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to remove the connector?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleRemove} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <ButtonClose
        onClick={handlerAddNewConnector}
        fullWidth
      >
        + Add new connector
      </ButtonClose>
    </Box>
  );
}
