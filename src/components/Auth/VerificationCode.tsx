import { loginFormAtom, loginLoader } from "@/store/login"
import {
  FormGroup,
  Stack,
  TextField,
} from "@mui/material"
import { useAtom } from "jotai"
import { useRouter } from "next/router"
import { ChangeEvent } from "react"
import { graphQlInstance } from "../../services/gql"
import { snackbarState } from "../../store/snackbar"
import {
  ButtonClose,
  ButtonDefault,
} from "../Buttons"

export const VerificationCode = () => {
  const [loginForm, setLoginForm] = useAtom(loginFormAtom)
  const [, setSnackbar] = useAtom(snackbarState)
  const router = useRouter()
  const [loader, setLoader] = useAtom(loginLoader)

  const handlerChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLoginForm({ ...loginForm, code: event?.target?.value })
  }

  const handlerLogin = async () => {
    setLoader(true)
    await handleMutationLogin()
    setLoader(false)
  }

  const handleMutationLogin = async () => {
    try {
      await graphQlInstance.authUser(loginForm.email, loginForm.code)
    } catch (error: any) {
      console.log(error)
      setSnackbar({
        message: error.message,
        type: 'error'
      })
    }
  }

  const handlerBack = () => {
    setLoginForm({ ...loginForm, isCodeSent: false })
  }

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
  )
}
