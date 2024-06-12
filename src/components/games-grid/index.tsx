import Game from "@/types/Game";
import GameCard from "./game-card";

interface Props {
  games: Game[];
}

const GamesGrid = async ({ games }: Props) => (
  <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    {games.map((game) => (
      <div key={game.id}>
        <GameCard {...game} />
      </div>
    ))}
  </section>
);

export default GamesGrid;
