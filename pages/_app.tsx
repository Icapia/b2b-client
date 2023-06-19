import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client";
import { client } from "../libs/apollo-client";

import "../styles/globals.scss";
import "../styles/main.scss";

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}