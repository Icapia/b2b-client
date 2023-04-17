import {
  Box,
  FormGroup,
  Grid,
  InputAdornment,
  Item,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import {
  ButtonClose,
  ButtonDefault,
  ButtonDelete,
} from "../../Buttons/Buttons";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

export const VerificationForm = (props) => {
  return (
    <>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={2}
      >
        <h1>ICAPIA EV</h1>
        <h5>Please login to your account to continue</h5>
        <div className="userProfile__avatar userProfile__avatar--chat topline">
          <h2>Please check your e-mail</h2>
          <h5>Please login to your account to continue</h5>

          <p className="mt-10">Verify code</p>
          <div className="modal__content-form modal__content-form--fullw mxw-700">
            <FormGroup className="modal__content-formGroup col-2 mt-20">
              <TextField
                autoComplete={false}
                className={"mt-20 flex-w"}
                type={"email"}
                focused={true}
                name={"password"}
                required={true}
                InputLabelProps={{ required: false }}
                label={"Verification code"}
                placeholder={"Verification code"}
                onChange={(event) => props.handlerChange(event)}
                // InputProps={{
                //   startAdornment: (
                //     <InputAdornment position="start">₽</InputAdornment>
                //   ),
                // }}
              />
            </FormGroup>
          </div>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <ButtonClose
              disabled={false}
              className={"mt-20 flex-fw"}
              fullWidth={true}
              minRows={5}
              onClick={props.handleBack}
            >
              Back
            </ButtonClose>
            <ButtonDefault
              disabled={false}
              className={"mt-20 flex-fw"}
              fullWidth={true}
              minRows={5}
              onClick={props.handleLogin}
            >
              Login
            </ButtonDefault>
          </Stack>
        </div>
      </Stack>
    </>
  );
};
