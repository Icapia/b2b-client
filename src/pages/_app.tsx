import ErrorBoundaryContainer from '@/helpers/ErrorBoundary';
import { ApolloProvider } from "@apollo/client";
import { Provider } from 'jotai'
import type { AppProps } from 'next/app'

import "../styles/globals.scss";
import "../styles/main.scss";
import { graphQlInstance } from '@/services/gql';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundaryContainer>
      <ApolloProvider client={graphQlInstance.client}>
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
    </ErrorBoundaryContainer>
  )
}