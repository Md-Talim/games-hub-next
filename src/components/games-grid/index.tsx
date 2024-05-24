import fetchData from "@/utils/fetch-data";
import GameCard from "./game-card";

interface Game {
  id: number;
  slug: string;
  name: string;
  description: string;
  website: string;
  background_image: string;
  metacritic: number;
  rating_top: number;
}

export async function getGames() {
  const games = fetchData<Game>("/games");

  return games;
}

const GamesGrid = async () => {
  const games = await getGames();

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
