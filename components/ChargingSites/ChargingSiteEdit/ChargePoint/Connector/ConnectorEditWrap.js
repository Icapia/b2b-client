import * as React from "react";

import Box from "@mui/material/Box";
import { ButtonClose } from "../../../../Buttons/Buttons";
import { ConnectorEditForm } from "./ConnectorEditForm";

export function ConnectorsEditWrap() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box>
        <ConnectorEditForm></ConnectorEditForm>
      </Box>
      <Box>
        <ConnectorEditForm></ConnectorEditForm>
      </Box>
      <ButtonClose fullWidth>+ Add new connector</ButtonClose>
    </Box>
  );
}
