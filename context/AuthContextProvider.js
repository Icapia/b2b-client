import React, { createContext, useEffect, useState } from "react";

import { GET_ME_GQL } from "../graphql/gql/queries/auth-queries.gql";
import Router from "next/router";
import { useQuery } from "@apollo/client";

// import { User } from "../types";

// interface Props {}

// type Actions = 'signup' | 'signin' | 'request' | 'reset' | 'close'

// type HandleAuthAction = (action: Actions) => void

// interface AuthContextValues {
//   authAction: Actions
//   handleAuthAction: HandleAuthAction
//   loggedInUser: User | null
//   setAuthUser: (user: User | null) => void
// }

const storageName = "userData";

const initialState = {
  authAction: "close",
  handleAuthAction: () => {},
  loggedInUser: null,
  setAuthUser: () => {},
  logout: () => {},
  login: () => {},
};

export const AuthContext = createContext(initialState);

const AuthContextProvider = ({ children }) => {
  const [authAction, setAuthAction] = useState("close");
  const [loggedInUser, setLoggedInUser] = useState(null);

  const { data } = useQuery(GET_ME_GQL, {});

  useEffect(() => {
    if (data?.me) setLoggedInUser(data.me);
  }, [data?.me]);

  useEffect(() => {
    const syncSignout = (e) => {
      if (e.key === "signout") {
        // Log user out
        setLoggedInUser(null);

        // Push user to home page
        Router.push("/organization");
      }
    };

    window.addEventListener("storage", syncSignout);

    return () => window.removeEventListener("storage", syncSignout);
  }, []);

  const handleAuthAction = (action) => {
    setAuthAction(action);
  };

  const setAuthUser = (user) => {
    setLoggedInUser(user);
    Router.push("/organization");
  };

  const login = (token) => {
    localStorage.setItem(
      storageName,
      JSON.stringify({
        token: token,
      })
    );
  };

  const logout = () => {
    localStorage.removeItem("userData");

    setLoggedInUser(null);
    Router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        authAction,
        handleAuthAction,
        loggedInUser,
        setAuthUser,
        logout,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

// const { me } = useAuth;

// const { data, loading, error } = useQuery(GET_ME_GQL, {});

// if (error) console.log("EROOR", error);
// if (data) console.log("DATA", data);
// if (loading) console.log("LOADING", loading);

// useEffect(() => {
//   if (data?.me) me(data.me);
// }, [data?.me]);
