import GamesGrid from "@/components/games-grid";
import GenreList from "@/components/genre-list";
import { PlatformSelector, SortSelector } from "@/components/selectors";
import { GamesGridSkeleton } from "@/components/skeletons";
import APIClient from "@/lib/utils/api-client";
import Game from "@/types/Game";
import Query from "@/types/Query";
import { Suspense } from "react";

async function getGames(query: Query) {
  const apiClient = new APIClient<Game>("/games");
  const games = await apiClient.getAll({
    params: {
      genres: query.genres,
      ordering: query.ordering,
      parent_platforms: query.parent_platforms,
      search: query.search,
    },
  });

  return games;
}

const Home = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const query = {
    genres: searchParams.genres,
    ordering: searchParams.ordering,
    parent_platforms: searchParams.parent_platforms,
    search: searchParams.search,
  };

  const games = await getGames(query);

  return (
    <div className="grid grid-cols-fr lg:grid-cols-[250px_1fr]">
      <section className="hidden lg:block overflow-y-auto h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] px-6 py-2">
        <GenreList />
      </section>
      <div className="overflow-y-auto max-h-[calc(100vh-80px)] p-10 space-y-8">
        <h1 className="text-5xl font-bold uppercase">All Games</h1>

        <section className="flex mb-5 gap-5">
          <Suspense>
            <PlatformSelector />
            <SortSelector />
          </Suspense>
        </section>

        <Suspense fallback={<GamesGridSkeleton />}>
          <GamesGrid games={games.results} />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
