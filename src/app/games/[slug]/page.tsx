import {
  ExpandableText,
  GameAttributes,
  GameScreenshots,
} from "@/components/game-details";
import APIClient from "@/lib/utils/api-client";
import Game from "@/types/Game";

async function getGameDetails(slug: string) {
  const apiClient = new APIClient<Game>("/games");
  const gameDetails = await apiClient.get(slug);

  return gameDetails;
}

const GameDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const gameDetails = await getGameDetails(params.slug);

  return (
    <main className="max-w-5xl mx-auto p-10">
      <GameScreenshots id={gameDetails.id} />
      <div className="space-y-5">
        <h1 className="text-2xl font-bold">{gameDetails.name}</h1>
        <ExpandableText text={gameDetails.description} />
        <GameAttributes game={gameDetails} />
      </div>
    </main>
  );
};

export default GameDetailsPage;
