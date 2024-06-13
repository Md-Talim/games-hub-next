import APIClient from "@/lib/utils/api-client";
import Screenshot from "@/types/Screenshot";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import GameTrailer from "./game-trailer";

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
    <Carousel>
      <CarouselContent>
        {data.results.map((screenshot) => (
          <CarouselItem
            key={screenshot.id}
            className="md:basis-1/2 lg:basis-1/3"
          >
            <Image
              src={screenshot.image}
              alt={`Screenshot ${screenshot.id}`}
              height={100}
              width={200}
              className="w-full rounded-md"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="max-sm:hidden bg-transparent text-silverCloud" />
      <CarouselNext className="max-sm:hidden bg-transparent text-silverCloud" />
    </Carousel>
  );
};

export default GameScreenshots;
