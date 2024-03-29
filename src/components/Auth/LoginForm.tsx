import { loginFormAtom } from '@/store/login'
import {
  FormGroup,
  Stack,
  TextField,
} from "@mui/material"
import { useAtom } from "jotai"
import { ChangeEvent } from "react"
import {
  ButtonDefault,
} from "../Buttons"

export const LoginForm = () => {
  const [loginForm, setLoginForm] = useAtom(loginFormAtom)

  const handlerChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLoginForm({...loginForm, username: event?.target?.value})
  }

  const handleSendCode = () => {
    setLoginForm({...loginForm, isCodeSent: true})
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
          <h2>Login</h2>
          <h5>Please login to your account to continue</h5>

          <p className="mt-10">Personal Information</p>
          <div className="modal__content-form modal__content-form--fullw mxw-700">
            <FormGroup className="modal__content-formGroup col-2 mt-20">
              <TextField
                className={"mt-20"}
                fullWidth
                type={"email"}
                focused={true}
                name={"username"}
                required={true}
                InputLabelProps={{ required: false }}
                label={"E-mail"}
                placeholder={"test@test.com"}
                onChange={(event) => {handlerChange(event)}}
              />
            </FormGroup>
          </div>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <ButtonDefault
              disabled={false}
              className={"mt-20 flex-fw"}
              fullWidth={true}
              onClick={handleSendCode}
            >
              Send
            </ButtonDefault>
          </Stack>
        </div>
      </Stack>
    </>
  );
};
