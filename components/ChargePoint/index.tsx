import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ChargePointForm } from "./ChargePointForm";
import { ChargePointT } from "../../types/site-types";
import { FC } from "react";
import { ConnectorsEditWrap } from "../Connector/ConnectorEditWrap";
import { useAtom } from "jotai";
import { editSiteAtom } from "../../store/site";

interface ChargePointI {
  chargepoint: ChargePointT,
}

export const ChargePoint: FC<ChargePointI>  = ({
  chargepoint,
}) => {
  const [site] = useAtom(editSiteAtom)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <ChargePointForm/>
        </Grid>
        <Grid item xs={6}>
          <ConnectorsEditWrap
            chargepoint={chargepoint}
            price={site?.default_price}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
