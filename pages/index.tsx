import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "@/graphql/queries";

export default function Home() {
  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: { page: 1 },
  });

  if (loading) return <p className="text-center mt-10">Loading episodes...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error.message}</p>;

  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Rick and Morty Episodes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.episodes.results.map((episode: any) => (
          <div key={episode.id} className="bg-white rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold">{episode.name}</h2>
            <p className="text-gray-500">{episode.episode}</p>
            <p className="text-sm text-gray-400">Air Date: {episode.air_date}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

