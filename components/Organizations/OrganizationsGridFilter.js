import { InputAdornment, MenuItem, Select } from "@mui/material";

export default function OrganizationsGridFilter(props) {
  return (
    <div className="filter">
      <div className="filter__wrapper">
        <div className="filter__sort">
          {/* <h6>{"Total & Sort"}</h6> */}
          <div className="filter-items">
            <span>Total: Organization</span>
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
