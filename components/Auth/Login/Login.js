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

  const handleMessage = () => {
    setMessage({
      className: "messageBox",
      message: "Test Message",
    });
  };

  const handleSendCode = () => {
    setisVerificationForm(true);
  };

  const [mutationLogin, loginMutaion] = useMutation(LOGIN_USER_GQL);

  const handlerUpdate = () => {
    props.onChange({ ...form });
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
          username: "user",
          password: "pass",
        },
      },
    });
  };

  if (loginMutaion?.data) login(loginMutaion?.data?.login?.accessToken);

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={2}></Grid>
        <Grid item xs={5}>
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
          >
            {(isVerificationForm && <VerificationForm></VerificationForm>) || (
              <LoginForm sendCode={handleSendCode}></LoginForm>
            )}
            <div>
              <div style={{ fontSize: "9px" }}>
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </div>
            </div>
          </Stack>
          <button onClick={handlemutationLogin}>SetTOKEN</button>
          <button onClick={handleLogout}>LOGOUT</button>
        </Grid>
        <Grid item xs={3}>
          <Image
            src={"/image/login-background.jpg"}
            width={680}
            height={1117}
          />
        </Grid>
      </Grid>
    </>
  );
};
