import "../styles/globals.scss";
import "../styles/main.scss";

import { ApolloProvider } from "@apollo/client";
import AuthContext from "../components/Context/AuthContext";
import ThemeContext from "../components/Context/Theme";
import client from "../libs/apollo-client";
import { useAuth } from "../hooks/auth.hook";
import { useState } from "react";

function CrmApp({ Component, pageProps }) {
  const [isActive, setActive] = useState(false);
  const { userId, user, token, login, logout } = useAuth();
  const isAuthenticated = !!token;

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider
        value={{ userId, token, login, logout, isAuthenticated, user }}
      >
        <ThemeContext.Provider value={{ isActive, setActive }}>
          <Component {...pageProps} />
        </ThemeContext.Provider>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default CrmApp;
