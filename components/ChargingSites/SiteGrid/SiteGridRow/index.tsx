import { IconButton, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { ChargePoint } from "../../../../types/entities";
import { ButtonBlackTransparent } from "../../../Buttons";
import Sheet from "@mui/joy/Sheet";
import Table from "@mui/joy/Table";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Status, StatusType } from "../Status";

interface SiteGridRowI {
  chargepoint: ChargePoint,
  initialIsOpen?: boolean,
}

export const SiteGridRow: FC<SiteGridRowI> = ({
  chargepoint,
  initialIsOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const router = useRouter();
  const status: StatusType = chargepoint?.status?.toLowerCase() as StatusType || "unavailable"

  const handleNavigate = () => {
    router.push(`/charging-sites/${chargepoint.siteId}`)
  }

  return (
    <>
      <tr style={{overflowX: 'scroll'}}>
        <td>
          <IconButton
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRight />}
          </IconButton>
        </td>
        <th scope="row">{chargepoint?.chargePointHardwareId}</th>
        <td>{chargepoint?.chargePointHardwareId}</td>
        <td>{chargepoint?.siteId}</td>
        <td>
          <div>
            <Typography>
              {chargepoint?.connectors?.map((e) => `${e?.connectorTypeName}, `)}
            </Typography>
          </div>
        </td>
        <td>
          <Status status={status}/>
        </td>
        <td style={{textAlign: 'right'}}>{chargepoint?.instantPower}</td>
        <td>
          <ButtonBlackTransparent onClick={handleNavigate}>
            Edit
            <img style={{marginLeft: '4px'}} src="/image/icons/edit.svg"/>
          </ButtonBlackTransparent>
        </td>
      </tr>
      <tr style={{overflowX: 'scroll'}}>
        <td style={{ height: 0, padding: 0 }} colSpan={8}>
          {isOpen && (
            <Sheet
              variant="soft"
              sx={{
                p: 0,
                m: 2,
                mb: 1,
                borderRadius: 10,
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
                  {chargepoint?.connectors?.map((e, index) => {
                    const status: StatusType = e?.statusName?.toLowerCase() as StatusType || "unavailable"

                    return (
                      <tr key={index + e?.id}>
                        <th scope="row">{e?.connectorTypeName}</th>
                        <td>{e?.price}</td>
                        <td>
                          <Status status={status}/>
                        </td>
                        <td style={{textAlign: 'right'}}>{e?.power}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </Sheet>
          )}
        </td>
      </tr>
    </>
  );
}