import GamesGrid from "@/components/games-grid";
import GenreList from "@/components/genre-list";
import { PlatformSelector, SortSelector } from "@/components/selectors";
import fetchData from "@/lib/utils/fetch-data";
import Game from "@/types/Game";
import Query from "@/types/Query";

export async function getGames(query: Query) {
  const games = fetchData<Game>("/games", query);

  return games;
}

const Home = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const query = {
    genres: searchParams?.genres || "",
    ordering: searchParams?.ordering || "",
    parent_platforms: searchParams?.parent_platforms || "",
  };

  const games = await getGames(query);

  return (
    <div className="grid grid-cols-fr lg:grid-cols-[250px_1fr]">
      <section className="hidden lg:block overflow-y-auto h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] px-6 py-2">
        <aside>
          <GenreList />
        </aside>
      </section>
      <div className="overflow-y-auto max-h-[calc(100vh-80px)] p-10 space-y-8">
        <h1 className="text-5xl font-bold uppercase">All Games</h1>

        <section className="flex mb-5 gap-5">
          <PlatformSelector />
          <SortSelector />
        </section>

        <GamesGrid games={games} />
      </div>
    </div>
  );
};

export default Home;
