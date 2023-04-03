import * as React from "react";

import Box from "@mui/material/Box";
import { ButtonClose } from "../../../../Buttons/Buttons";
import { ConnectorEditForm } from "./ConnectorEditForm";

export function ConnectorsEditWrap(props) {
  console.log(props.data);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {props.data && (
        <div>
          {props.data.connectors.map((e, i) => {
            return (
              <Box key={i}>
                <ConnectorEditForm
                  chargePointId={props.data.id}
                  data={e}
                ></ConnectorEditForm>
              </Box>
            );
          })}
        </div>
      )}

      <ButtonClose fullWidth>+ Add new connector</ButtonClose>
    </Box>
  );
}
