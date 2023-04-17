import "../styles/globals.scss";
import "../styles/main.scss";

import { ApolloProvider } from "@apollo/client";
import AuthContextProvider from "../context/AuthContextProvider";
import ThemeContext from "../components/Context/Theme";
import client from "../libs/apollo-client";
import { useAuth } from "../hooks/auth.hook";
import { useState } from "react";

// import AuthContext from "../components/Context/AuthContext";

function CrmApp({ Component, pageProps }) {
  const [isActive, setActive] = useState(false);
  const { userId, user, token, login, logout } = useAuth();
  const isAuthenticated = !!token;

  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        {/* <AuthContext.Provider
        value={{ userId, token, login, logout, isAuthenticated, user }}
      > */}
        <ThemeContext.Provider value={{ isActive, setActive }}>
          <Component {...pageProps} />
        </ThemeContext.Provider>
        {/* </AuthContext.Provider> */}
      </AuthContextProvider>
    </ApolloProvider>
  );
}

export default CrmApp;
