import APIClient from "@/lib/utils/api-client";
import Genre from "@/types/Genre";
import GenreButton from "./genre-button";

export async function getGenres() {
  const apiClient = new APIClient<Genre>("/genres");
  const genres = await apiClient.getAll();

  return genres;
}

const GenreList = async () => {
  const genres = await getGenres();

  return (
    <>
      <h2 className="text-3xl font-bold uppercase">Genres</h2>
      <ul className="space-y-4 mt-6">
        {genres.results.map((genre) => (
          <li key={genre.id}>
            <GenreButton {...genre} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
