import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import Table from "@mui/joy/Table";
import { Site } from "../../../types/entities";
import { ChargingSitesGridFilter } from "../ChargingSitesGridFilter";
import { SiteGridRow } from "./SiteGridRow";

interface SiteGridI {
  sites: Site[]
}

export const SitesGrid: React.FC<SiteGridI> = ({
  sites,
}) => {
  console.log(sites)

  return (
    <>
      {sites?.map((e, i) => {
        return (
          <div key={i} className="chargingsite__grid">
            <ChargingSitesGridFilter
              site={e.site}
              site_area={e.site_area}
              id={e.id}
              phone_number="+1 923 923-23-23"
            />
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
                  {e?.chargePoints?.map((chargepoint, index) => (
                    <SiteGridRow
                      key={chargepoint?.id + index}
                      chargepoint={chargepoint}
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
