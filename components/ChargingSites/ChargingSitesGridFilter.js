import { ButtonClose, ButtonDefault, ButtonDelete } from "../Buttons/Buttons";
import { InputAdornment, MenuItem, Select } from "@mui/material";

import Link from "next/link";

export default function ChargingSitesGridFilter(props) {
  return (
    <div className="filter">
      <div className="filter__wrapper">
        <div className="filter__sort">
          <h3>{props.data.site}</h3>
          <div className="filter-items">
            <span>{props.data.site_area}</span>
            <span>+1 123 123-12-12</span>
            {/* <Select
              className={"filter__select"}
              defaultValue={"ASC"}
              startAdornment={
                <InputAdornment position="end">Sort by: </InputAdornment>
              }
            >
              <MenuItem value={"ASC"}>ASC</MenuItem>
              <MenuItem value={"DESC"}>DESC</MenuItem>
            </Select> */}
          </div>
        </div>
        <div className="filter__filters">
          <Link href={`/charging-sites/1`}>
            <ButtonClose>Manage site</ButtonClose>
          </Link>
          {/* <h6>Filters</h6>
          <div className={"filter-items"}>
            <Select
              className={"filter__select"}
              defaultValue={"manager"}
              startAdornment={
                <InputAdornment position="end">Role: </InputAdornment>
              }
            >
              <MenuItem value={"administrator"}>Administrator</MenuItem>
              <MenuItem value={"owner"}>Owner</MenuItem>
              <MenuItem value={"manager"}>Manager</MenuItem>
            </Select>
            <Select
              className={"filter__select"}
              defaultValue={"active"}
              startAdornment={
                <InputAdornment position="end">Status: </InputAdornment>
              }
            >
              <MenuItem value={"active"}>Active</MenuItem>
              <MenuItem value={"frozzen"}>Frozzen</MenuItem>
              <MenuItem value={"blocked"}>Blocked</MenuItem>
            </Select>
          </div> */}
        </div>
      </div>
    </div>
  );
}
