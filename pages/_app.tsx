// pages/_app.tsx
import type { AppProps } from "next/app";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </ApolloProvider>
  );
}

export default MyApp;


