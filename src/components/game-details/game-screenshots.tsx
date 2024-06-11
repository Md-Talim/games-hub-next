import APIClient from "@/lib/utils/api-client";
import Screenshot from "@/types/Screenshot";
import Image from "next/image";

async function getScreenshots(gameId: string) {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  const response = await apiClient.getAll();

  return response;
}

interface Props {
  id: number;
}

const GameScreenshots = async ({ id }: Props) => {
  const data = await getScreenshots(id.toString());

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
      {data.results.map((screenshot) => (
        <Image
          key={screenshot.id}
          src={screenshot.image}
          alt={`Screenshot ${screenshot.id}`}
          height={100}
          width={200}
          className="w-full"
        />
      ))}
    </div>
  );
};

export default GameScreenshots;
