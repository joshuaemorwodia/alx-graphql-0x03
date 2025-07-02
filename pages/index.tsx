// pages/index.tsx
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../graphql/queries";

const Home: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const { loading, error, data, refetch } = useQuery(GET_EPISODES, {
    variables: { page },
  });

  if (loading) return <p>Loading...</p>;
  if (error) throw error; // Let ErrorBoundary catch this

  return (
    <div>
      <h1>Episodes</h1>
      {/* Render your episode data */}
    </div>
  );
};

import ErrorBoundary from "../components/ErrorBoundary";

const IndexPage = () => (
  <ErrorBoundary>
    <Home />
  </ErrorBoundary>
);

export default IndexPage;
