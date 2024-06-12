import { DrawerClose } from "@/components/ui/drawer";
import APIClient from "@/lib/utils/api-client";
import Genre from "@/types/Genre";
import GenreButton from "./genre-button";
import { Suspense } from "react";

export async function getGenres() {
  const apiClient = new APIClient<Genre>("/genres");
  const genres = await apiClient.getAll();

  return genres;
}

interface Props {
  isMobile?: boolean;
}

const GenreList = async ({ isMobile }: Props) => {
  const genres = await getGenres();

  return (
    <aside>
      <h2 className="text-3xl font-bold uppercase">Genres</h2>
      <ul className="space-y-4 mt-6">
        {genres.results.map((genre) => (
          <li key={genre.id}>
            {isMobile ? (
              <DrawerClose>
                <Suspense>
                  <GenreButton {...genre} />
                </Suspense>
              </DrawerClose>
            ) : (
              <Suspense>
                <GenreButton {...genre} />
              </Suspense>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default GenreList;
