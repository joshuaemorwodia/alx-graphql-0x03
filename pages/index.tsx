// pages/index.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import ErrorBoundary from '@/components/ErrorBoundary';

// Dynamically import with SSR disabled
const ErrorProneComponent = dynamic(() => import('@/components/ErrorProneComponent'), {
  ssr: false,
});

const Home: React.FC = () => {
  return (
    <ErrorBoundary>
      <ErrorProneComponent />
    </ErrorBoundary>
  );
};

export default Home;
