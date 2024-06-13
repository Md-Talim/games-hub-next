import { GamesGridSkeleton, GenreListSkeleton } from "@/components/skeletons";

const LoadingPage = () => (
  <main>
    <div className="grid grid-cols-fr lg:grid-cols-[250px_1fr]">
      <section className="hidden lg:block overflow-y-auto h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] px-6 py-2">
        <aside>
          <GenreListSkeleton />
        </aside>
      </section>
      <div className="overflow-y-auto max-h-[calc(100vh-80px)] p-2 md:p-10 space-y-8">
        <h1 className="text-5xl font-bold uppercase">All Games</h1>

        <section className="flex mb-5 gap-5">
          <div className="animate-pulse w-56 h-9 bg-licorice border border-codGray" />
          <div className="animate-pulse w-56 h-9 bg-licorice border border-codGray" />
        </section>

        <GamesGridSkeleton />
      </div>
    </div>
  </main>
);
export default LoadingPage;
