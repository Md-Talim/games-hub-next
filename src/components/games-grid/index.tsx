import Game from "@/types/Game";
import GameCard from "./game-card";

interface Props {
  games: Game[];
}

const GamesGrid = async ({ games }: Props) => (
  <section className="grid grid-cols-12 gap-5">
    {games.map((game) => (
      <div key={game.id} className="col-span-4">
        <GameCard {...game} />
      </div>
    ))}
  </section>
);

export default GamesGrid;
