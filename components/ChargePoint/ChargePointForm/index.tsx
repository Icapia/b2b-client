import { FormGroup, TextField } from '@mui/material';
import React from 'react'
import { FormInput } from '../../UI/Input/FormInput';

export const ChargePointForm = () => {

  return (
    <FormGroup className="modal__content-formGroup col-2">
      <TextField
        fullWidth
        value={''}
        className={"mt-20 flex-w"}
        type={"string"}
        name={"chargePointHardwareId"}
        required={true}
        InputLabelProps={{ required: false }}
        label={"Charge Point ID"}
        placeholder={`Charge Point ID`}
      />

      <TextField
        fullWidth
        value={'https://icapia-ev-b2b.com/charge-point2323'}
        className={"mt-20 flex-w"}
        type={"string"}
        name={"ocpp-endpoint"}
        required={true}
        InputLabelProps={{ required: false }}
        label={"OCPP Endpoint "}
        placeholder={`OCPP Endpoint `}
      />
    </FormGroup>
  );

  
}
