import Game from "@/types/Game";
import Query from "@/types/Query";
import fetchData from "@/lib/utils/fetch-data";
import GameCard from "./game-card";

interface Props {
  query: Query;
}

export async function getGames(query: Query) {
  const games = fetchData<Game>("/games", query);

  return games;
}

const GamesGrid = async ({ query }: Props) => {
  const games = await getGames(query);

  return (
    <section className="grid grid-cols-12 gap-5">
      {games.map((game) => (
        <div key={game.id} className="col-span-4">
          <GameCard {...game} />
        </div>
      ))}
    </section>
  );
};

export default GamesGrid;
