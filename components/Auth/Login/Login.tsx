import {
  Stack,
} from "@mui/material";
import { useMutation } from "@apollo/client";
import { GET_ME_GQL } from "../../../graphql/gql/queries/auth-queries.gql";
import { LOGIN_USER_GQL } from "../../../graphql/gql/mutations/auth-mutations.gql";
import { LoginForm } from "./LoginForm";
import { VerificationForm } from "./VerificationForm";
import { useAtom } from "jotai";
import { loginFormAtom } from "../../../store/authorization";


export const Login = () => {
  const [form, setForm] = useAtom(loginFormAtom)

  const handleLogout = () => {
    // logout();
  };

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
              {(form?.isCodeSent && (
                <VerificationForm/>
              )) || (
                <LoginForm/>
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
