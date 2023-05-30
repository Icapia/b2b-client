import {
  FormControl,
  MenuItem,
  Select,
  InputLabel
} from "@mui/material";

export const SelectUI = (props) => {
  return (
    <FormControl fullWidth>FormControl
      <InputLabel id={'organization'}>Organization</InputLabel>
      <Select
        labelId={props.name}
        name={props.name}
        value={props.value}
        onChange={(event) => handlerChange(event)}
      >
        {props.organizations.map((e) => {
          return (
            <MenuItem
              key={e.id}
              value={e.id}
            >{`${e.id} ${e.name}`}</MenuItem>
          );
        })}
      </Select>
    </FormControl>
  )
}