import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client";
import { Suspense } from 'react';
import { graphQlInstance } from '../services/gql';

import "../styles/globals.scss";
import "../styles/main.scss";

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback="loading">
      <ApolloProvider client={graphQlInstance.client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Suspense>
    
  );
}