import Genre from "@/types/Genre";
import fetchData from "@/utils/fetch-data";
import GenreButton from "./genre-button";

export async function getGenres() {
  const genres = fetchData<Genre>("/genres");

  return genres;
}

const GenreList = async () => {
  const genres = await getGenres();

  return (
    <>
      <h2 className="text-3xl font-bold uppercase">Genres</h2>
      <ul className="space-y-4 mt-6">
        {genres.map((genre) => (
          <li key={genre.id}>
            <GenreButton {...genre} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
