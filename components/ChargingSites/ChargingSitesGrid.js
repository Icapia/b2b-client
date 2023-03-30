import * as React from "react";

import IconButton from "@mui/joy/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PropTypes from "prop-types";
import Sheet from "@mui/joy/Sheet";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";

function createData(name, calories, fat, carbs, protein, prote, prot, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    prote,
    prot,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(props.initialOpen || false);

  return (
    <React.Fragment>
      <tr>
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
        <th scope="row">{row.name}</th>
        <td>{row.calories}</td>
        <td>{row.fat}</td>
        <td>{row.carbs}</td>
        <td>{row.protein}</td>
        <td>{row.prote}</td>
        <td>{row.prot}</td>
      </tr>
      <tr>
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
              {/* <Typography level="h6" component="div">
                History
              </Typography> */}
              <Table
                borderAxis="bothBetween"
                size="sm"
                aria-label="purchases"
                sx={{
                  "& > thead > tr > th:nth-child(n + 3), & > tbody > tr > td:nth-child(n + 3)":
                    { textAlign: "right" },
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
                    <th>Power</th>
                  </tr>
                </thead>
                <tbody>
                  {row.history.map((historyRow) => (
                    <tr key={historyRow.date}>
                      <th scope="row">{historyRow.date}</th>
                      <td>{historyRow.customerId}</td>
                      <td>{historyRow.amount}</td>
                      <td>
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </td>
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

Row.propTypes = {
  initialOpen: PropTypes.bool,
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
    prote: PropTypes.number.isRequired,
    prot: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "UCAPIA #17",
    "132Upland Dr, Houston, T 722...",
    "UCAPIA #17",
    "Type 1, Tesla",
    4.0,
    4.3,
    4.3,
    2.5
  ),
  createData(
    "UCAPIA #18",
    "132Upland Dr, Houston, T 722...",
    "UCAPIA #17",
    "Type 1, Tesla",
    4.3,
    4.3,
    4.3,
    2.5
  ),
  createData(
    "UCAPIA #19",
    "132Upland Dr, Houston, T 722...",
    "UCAPIA #17",
    "Type 1, Tesla",
    6.0,
    4.3,
    4.3,
    2.5
  ),
  createData(
    "UCAPIA #20",
    "132Upland Dr, Houston, T 722...",
    "UCAPIA #17",
    "Type 1, Tesla",
    4.3,
    4.3,
    4.3,
    2.5
  ),
  createData(
    "UCAPIA #21",
    "132Upland Dr, Houston, T 722...",
    "UCAPIA #17",
    "Type 1, Tesla",
    3.9,
    4.3,
    4.3,
    2.5
  ),
];

export default function ChargingSitesGrid() {
  return (
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
            <th style={{ width: "30%" }}>Address</th>
            <th>Site</th>
            <th>Connectors</th>
            <th>Status</th>
            <th>Power</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <Row key={row.name} row={row} initialOpen={index === 0} />
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
}
