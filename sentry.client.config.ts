// sentry.client.config.ts
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'https://b1eccc01d9c734439ab72cb5d46171ce@o4509616006496256.ingest.us.sentry.io/4509616010821632',
  tracesSampleRate: 1.0, // Adjust for performance monitoring
});
