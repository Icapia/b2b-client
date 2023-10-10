import ErrorBoundaryContainer from '@/helpers/ErrorBoundary'
import { ApolloProvider } from "@apollo/client"
import { Provider } from 'jotai'
import type { AppProps } from 'next/app'

import { RouterGuard } from '@/components/RouterGuard/RouterGuard'
import { graphQlInstance } from '@/services/gql'
import Head from 'next/head'
import "../styles/globals.scss"
import "../styles/main.scss"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <ErrorBoundaryContainer>
        <ApolloProvider client={graphQlInstance.client}>
          <Provider>
            <RouterGuard>
              <Component {...pageProps} />
            </RouterGuard>
          </Provider>
        </ApolloProvider>
      </ErrorBoundaryContainer>
    </>
  )
}