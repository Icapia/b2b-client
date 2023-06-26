import {
  FormGroup,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import {
  ButtonClose,
  ButtonDefault,
  ButtonDelete,
} from "../../Buttons";
import { gql, useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import { useAtom } from "jotai";
import { loginFormAtom } from "../../../store/authorization";
import { GET_ME_GQL } from "../../../graphql/gql/queries/auth-queries.gql";
import { LOGIN_USER_GQL } from "../../../graphql/gql/mutations/auth-mutations.gql";
import { graphQlInstance } from "../../../services/gql";
import { snackbarState } from "../../../store/snackbar";
import { useRouter } from "next/router";

export const VerificationForm = () => {
  const [form, setForm] = useAtom(loginFormAtom)
  const [snackbar, setSnackbar] = useAtom(snackbarState)
  const router = useRouter();

  const handlerChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({...form, password: event?.target?.value})
  }

  const [mutationLogin, loginMutation] = useMutation(LOGIN_USER_GQL);

  const handlerLogin = () => {
    handleMutationLogin();
  };

  const handleMutationLogin = async () => {
    try {
      graphQlInstance.authUser(form.username, form.password)
      router.push('/organization')
    } catch (error: any) {
      console.log(error)
      setSnackbar({
        message: error.message,
        type: 'error'
      })
    }

    // await mutationLogin({
    //   onCompleted: (data) => {
    //     // setAuthUser(data.me);
    //   },
    //   refetchQueries: [
    //     {
    //       query: GET_ME_GQL,
    //       variables: {},
    //     },
    //     "GetUserInfo",
    //   ],
    //   variables: {
    //     input: {
    //       username: form?.username,
    //       password: form?.password,
    //     },
    //   },
    // });
  };

  const handlerBack = () => {
    setForm({...form, isCodeSent: false})
  };

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
                className={"mt-20 flex-w"}
                type={"email"}
                focused={true}
                name={"password"}
                required={true}
                InputLabelProps={{ required: false }}
                label={"Verification code"}
                placeholder={"Verification code"}
                onChange={(event) => handlerChange(event)}
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
              onClick={handlerBack}
            >
              Back
            </ButtonClose>
            <ButtonDefault
              disabled={false}
              className={"mt-20 flex-fw"}
              fullWidth={true}
              onClick={handlerLogin}
            >
              Login
            </ButtonDefault>
          </Stack>
        </div>
      </Stack>
    </>
  );
};
