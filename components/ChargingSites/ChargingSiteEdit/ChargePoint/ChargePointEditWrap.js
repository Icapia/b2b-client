import * as React from "react";

import Box from "@mui/material/Box";
import { ChargePointEditForm } from "./ChargePointEditForm";
import { ConnectorsEditWrap } from "./Connector/ConnectorEditWrap";
import Grid from "@mui/material/Grid";

export default function ChargePointEditWrap() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ChargePointEditForm></ChargePointEditForm>
        </Grid>
        <Grid item xs={6}>
          <ConnectorsEditWrap></ConnectorsEditWrap>
        </Grid>
      </Grid>
    </Box>
  );
}
