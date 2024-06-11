import APIClient from "@/lib/utils/api-client";
import Trailer from "@/types/Trailer";

interface Props {
  slug: string;
}

async function getTrailers(slug: string) {
  const apiClient = new APIClient<Trailer>(`/games/${slug}/movies`);
  const response = await apiClient.getAll();

  return response;
}

const GameTrailer = async ({ slug }: Props) => {
  const data = await getTrailers(slug);

  const trailer = data?.results[0];

  return trailer ? (
    <video src={trailer.data[480]} poster={trailer.preview} controls />
  ) : null;
};

export default GameTrailer;
