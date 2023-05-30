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
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../context/AuthContextProvider";
import { GET_ME_GQL } from "../../../graphql/gql/queries/auth-queries.gql";
import Image from "next/image";
import { LOGIN_USER_GQL } from "../../../graphql/gql/mutations/auth-mutations.gql";
import { LoginForm } from "./LoginForm";
import Message from "../../Messages/Message";
import { VerificationForm } from "./VerificationForm";

export const Login = (props) => {
  const [message, setMessage] = useState({
    className: "messageBox",
    message: "",
  });

  const { logout, login, setAuthUser } = useContext(AuthContext);

  const [isVerificationForm, setisVerificationForm] = useState(false);
  const [form, setForm] = useState({});

  const handleMessage = () => {
    setMessage({
      className: "messageBox",
      message: "Test Message",
    });
  };

  const handleSendCode = () => {
    setisVerificationForm(true);
  };

  const handleBack = () => {
    setisVerificationForm(false);
  };

  const handlerChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const [mutationLogin, loginMutaion] = useMutation(LOGIN_USER_GQL);

  const handleLogin = () => {
    console.log("FORM", form);
    handlemutationLogin();
  };

  const handleLogout = () => {
    logout();
  };

  const handlemutationLogin = async () => {
    await mutationLogin({
      onCompleted: (data) => {
        setAuthUser(data.me);
      },
      refetchQueries: [
        {
          query: GET_ME_GQL,
          variables: {},
        }, // DocumentNode object parsed with gql
        "GetUserInfo", // Query name
      ],
      variables: {
        input: {
          username: form?.username,
          password: form?.password,
        },
      },
    });
  };

  if (loginMutaion?.data) login(loginMutaion?.data?.login?.accessToken);

  return (
    <>
      <div className="login">
        <div className="login__wrapper">
          <div className="login__item login__left">
            <Stack
              direction="column"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={2}
            >
              {(isVerificationForm && (
                <VerificationForm
                  handleLogin={handleLogin}
                  handleBack={handleBack}
                  handlerChange={handlerChange}
                ></VerificationForm>
              )) || (
                <LoginForm
                  handlerChange={handlerChange}
                  sendCode={handleSendCode}
                ></LoginForm>
              )}
              <div>
                <div style={{ fontSize: "9px" }}>
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                </div>
              </div>
            </Stack>
          </div>
          <div className="login__item login__right">
            <img
              src={"/image/login-background.jpg"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
