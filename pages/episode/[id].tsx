import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const GET_EPISODE_BY_ID = gql`
  query getEpisodeById($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
      }
    }
  }
`;

const EpisodeDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_EPISODE_BY_ID, {
    variables: { id },
    skip: !id,
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  const { name, air_date, episode, characters } = data.episode;

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-white to-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">{name}</h1>
      <p className="text-gray-600 mb-2">Episode Code: {episode}</p>
      <p className="text-gray-600 mb-4">Aired On: {air_date}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Characters</h2>
      <ul className="list-disc pl-6">
        {characters.map((char: any) => (
          <li key={char.id} className="text-gray-700">{char.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeDetail;
