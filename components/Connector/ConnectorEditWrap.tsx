import Box from "@mui/material/Box";
import { ButtonClose } from "../Buttons";
import { ConnectorEditForm } from "./ConnectorEditForm";
import { FC } from "react";
import { ChargePointT, ConnectorT } from "../../types/site-types";

interface ConnectorEditWrapI {
  chargepoint: ChargePointT,
  price?: number,
}

export const ConnectorsEditWrap: FC<ConnectorEditWrapI> = ({
  chargepoint,
  price = 0
}) => {

  const handlerAddNewConnector = () => {}

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div>
        {chargepoint?.connectors?.map((connector, index) => {
          return (
            <Box key={index}>
              <ConnectorEditForm
                price={price}
                siteId={chargepoint?.siteId}
                chargePointHardwareId={chargepoint?.chargePointHardwareId}
              />
            </Box>
          );
        })}
      </div>

      <ButtonClose
        onClick={handlerAddNewConnector}
        fullWidth
      >
        + Add new connector
      </ButtonClose>
    </Box>
  );
}
