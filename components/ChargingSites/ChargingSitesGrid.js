import * as React from "react";
import ChargingSitesGridFilter from "./ChargingSitesGridFilter";
import IconButton from "@mui/joy/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Sheet from "@mui/joy/Sheet";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import { ButtonBlackTransparent } from "../Buttons";
import { useRouter } from "next/router";

const color = {
  connected: "green",
  available: "green",
  charging: "red",
  finishing: "#D68910",
  unavailable: "red",
  faulted: "red",
};

function Status(props) {
  return (
    <React.Fragment>
      <div style={{ color: color[props.status.toLowerCase()] }}>
        <b>{props.status}</b>
      </div>
    </React.Fragment>
  );
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(props.initialOpen || false);
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/charging-sites/${row.siteId}`)
  }

  return (
    <React.Fragment>
      <tr style={{overflowX: 'scroll'}}>
        <td>
          <IconButton
            aria-label="expand row"
            variant="plain"
            color="neutral"
            size="sm"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRight />}
          </IconButton>
        </td>
        <th scope="row">{row.chargePointHardwareId}</th>
        <td>{row.chargePointHardwareId}</td>
        <td>{row.siteId}</td>
        <td>
          <div>
            <Typography>
              {row.connectors.map((e) => `${e.connectorTypeName}, `)}
            </Typography>
          </div>
        </td>
        <td>
          <Status status={row.status}></Status>
        </td>
        <td style={{textAlign: 'right'}}>{row.instantPower}</td>
        <td>
          <ButtonBlackTransparent onClick={handleNavigate}>
            Edit
            <img style={{marginLeft: '4px'}} src="/image/icons/edit.svg"/>
          </ButtonBlackTransparent>
        </td>
      </tr>
      <tr style={{overflowX: 'scroll'}}>
        <td style={{ height: 0, padding: 0 }} colSpan={8}>
          {open && (
            <Sheet
              variant="soft"
              sx={{
                p: 0,
                m: 2,
                mb: 1,

                borderRadius: 10,
                // boxShadow: "inset 0 3px 6px 0 rgba(0 0 0 / 0.08)",
                backgroundColor: "#F9F9F9",
              }}
            >
              <Table
                borderAxis="bothBetween"
                size="sm"
                aria-label="purchases"
                sx={{
                  "& > thead > tr > th:nth-child(n + 4), & > tbody > tr > td:nth-child(n + 4)":
                    { textAlign: "right" },
                  "& > thead > tr > th:nth-child(3), & > tbody > tr > td:nth-child(3)":
                    { textAlign: "center" },
                  "& > tr:not(:first-of-type) th:not([colspan]):first-child": {
                    border: "none",
                  },
                  "& > thead > tr > th": {
                    color: "#fff",
                    backgroundColor: "#3F3F3F",
                  },
                  "--TableCell-paddingX": "0.5rem",
                }}
              >
                <thead>
                  <tr>
                    <th>Connector</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th style={{textAlign: 'right'}} >Power</th>
                  </tr>
                </thead>
                <tbody style={{overflowX: 'scroll'}}>
                  {row.connectors.map((historyRow) => (
                    <tr key={historyRow.date}>
                      <th scope="row">{historyRow.connectorTypeName}</th>
                      <td>{historyRow.price}</td>
                      <td>
                        <Status status={historyRow.statusName}></Status>
                      </td>
                      <td style={{textAlign: 'right'}}>{historyRow.power}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Sheet>
          )}
        </td>
      </tr>
    </React.Fragment>
  );
}

export default function ChargingSitesGrid(props) {
  return (
    <>
      {props.data.map((e, i) => {
        return (
          <div key={i} className="chargingsite__grid">
            <ChargingSitesGridFilter
              data={{ id: e.id, site: e.site, site_area: e.site_area }}
            ></ChargingSitesGridFilter>
            <Sheet>
              <Table
                aria-label="collapsible table"
                sx={{
                  "& > thead > tr > th:nth-child(n + 8), & > tbody > tr > td:nth-child(n + 8)":
                    { textAlign: "right" },
                  "& > thead > tr > th": {
                    color: "#fff",
                    backgroundColor: "#3F3F3F",
                  },
                  '& > tbody > tr:nth-child(odd) > td, & > tbody > tr:nth-child(odd) > th[scope="row"]':
                    {
                      borderBottom: 0,
                    },
                  borderRadius: 1,
                }}
              >
                <thead>
                  <tr>
                    <th style={{ width: 40 }} aria-label="empty" />
                    <th style={{ width: "20%" }}>Charge Point</th>
                    <th style={{ width: "20%" }}>Address</th>
                    <th>Site</th>
                    <th style={{ width: "20%" }}>Connectors</th>
                    <th>Status</th>
                    <th style={{textAlign: 'right'}}>Power</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody style={{overflowX: 'scroll'}}>
                  {e.chargePoints.map((row, index) => (
                    <Row
                      key={row.name}
                      row={row}
                    />
                  ))}
                </tbody>
              </Table>
            </Sheet>
          </div>
        );
      })}
    </>
  );
}
