import fetchData from "@/utils/fetch-data";
import GameCard from "./game-card";
import Game from "@/types/game";

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
