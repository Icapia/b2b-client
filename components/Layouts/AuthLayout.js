import { FormGroup, TextField } from "@mui/material";
import { useContext, useState } from "react";

import AuthContext from "../Context/AuthContext";
import { ButtonDefault } from "../Buttons/Buttons";
import Head from "next/head";
import Link from "next/link";
import { useHttp } from "../../hooks/http.hook";

export function AuthLayout(props) {
  const auth = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { request, loading, error, setError } = useHttp();

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      // const data = await request('/api/auth/register', 'POST', {...form})
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/login", "POST", { ...form });
      auth.login(data.token, data.userId, data.user);
      if (data) {
        setMessage("");
      }
    } catch (e) {
      if (
        e.message == "Invalid password" ||
        e.message == "Account not found" ||
        e.message == "Please enter your Email and Password"
      ) {
        setMessage(e.message);
      }
    }
  };

  return (
    <main className="app">
      <Head>
        <title>Authorization</title>
      </Head>
      <main className="content content--auth">
        <div className="auth">
          <div className="auth__header">
            <h1>NID CRM</h1>
            <p>Authorization</p>
          </div>
          <div className="auth__form topline">
            <h4>Authorization</h4>
            <p>Please login to your account to continue</p>

            <FormGroup className={"form"}>
              <TextField
                name={"email"}
                focused={true}
                required
                helperText={message}
                InputLabelProps={{ required: false }}
                label={"Login"}
                placeholder={"Enter your login"}
                onChange={changeHandler}
              />
              <TextField
                autoComplete={false}
                type="password"
                className={"mt-20"}
                name={"password"}
                focused={true}
                required
                InputLabelProps={{ required: false }}
                label={"Password"}
                placeholder={"Enter your password"}
                onChange={changeHandler}
              />
              <ButtonDefault
                className={"mt-20"}
                onClick={loginHandler}
                disabled={loading}
              >
                Sign In
              </ButtonDefault>
            </FormGroup>
          </div>
          <div className="auth__forgot">
            <h3>Forgot password?</h3>
            <p className={"text"}>
              Enter the email address you used when you joined and we’ll send
              you instructions to reset your password.
            </p>
            <ButtonDefault className={"mt-20"}>Recover account</ButtonDefault>
          </div>
          <div className="auth__policy">
            This site is protected by reCAPTCHA and the{" "}
            <Link href={"/privacy-policy"}>
              <a target={"_blank"} className={"link"}>
                Privacy Policy
              </a>
            </Link>
            y and{" "}
            <Link href={"/term-of-use"}>
              <a target={"_blank"} className={"link"}>
                Term of Service
              </a>
            </Link>{" "}
            apply.
          </div>
        </div>
      </main>
    </main>
  );
}
