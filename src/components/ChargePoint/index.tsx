import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ChargePointForm } from "./ChargePointForm";
import { ChargePointT } from "../../types/site-types";
import { FC } from "react";
import { ConnectorsEditWrap } from "../Connector/ConnectorEditWrap";
import { useAtom } from "jotai";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import styles from './index.module.scss'
import cn from 'classnames'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { siteAtom } from "@/store/edit-site";

interface ChargePointI {
  chargepointId: number,
  chargepoint: ChargePointT,
  index: number,
}

export const ChargePoint: FC<ChargePointI>  = ({
  chargepointId,
  chargepoint,
  index,
}) => {
  const [site] = useAtom(siteAtom)

  return (
    <Accordion
      className={cn(styles.accordion)}
    >
      <AccordionSummary 
        className={cn(styles.summary)}
        expandIcon={<ExpandMoreIcon/>}
      >
        <Typography fontWeight={500}>{'Charge Point #' + (chargepoint.id || index)}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <ChargePointForm
                chargepoint={chargepoint}
                chargepointId={chargepointId}
              />
            </Grid>
            <Grid item xs={6}>
              <ConnectorsEditWrap
                chargepointId={chargepointId}
                chargepoint={chargepoint}
                price={site?.default_price}
              />
            </Grid>
          </Grid>
        </Box>
      </AccordionDetails>
    </Accordion>
    
  );
}
