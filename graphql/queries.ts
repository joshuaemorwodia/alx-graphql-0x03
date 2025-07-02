// graphql/queries.ts
import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query GetEpisodes($page: Int!) {
    episodes(page: $page) {
      results {
        id
        name
        episode
        air_date
      }
    }
  }
`;
