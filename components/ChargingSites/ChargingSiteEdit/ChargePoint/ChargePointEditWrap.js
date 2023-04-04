import * as React from "react";

import Box from "@mui/material/Box";
import { ChargePointEditForm } from "./ChargePointEditForm";
import { ConnectorsEditWrap } from "./Connector/ConnectorEditWrap";
import Grid from "@mui/material/Grid";

export default function ChargePointEditWrap(props) {
  console.log(props.data);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {props.data && (
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <ChargePointEditForm {...props}></ChargePointEditForm>
          </Grid>
          <Grid item xs={6}>
            <ConnectorsEditWrap {...props}></ConnectorsEditWrap>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
