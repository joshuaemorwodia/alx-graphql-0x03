// pages/_app.tsx
import '../sentry.client.config';

import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apolloClient';
import ErrorBoundary from '@/components/ErrorBoundary';

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

