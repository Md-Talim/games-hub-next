import GenreList from "@/components/genre-list";

const Home = () => {
  return (
    <div className="grid grid-cols-fr lg:grid-cols-[250px_1fr]">
      <section className="hidden lg:block overflow-y-auto h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] px-6 py-2">
        <aside>
          <GenreList />
        </aside>
      </section>
      <div className="overflow-y-auto max-h-[calc(100vh-80px)] px-5">
        Game Name
        <section className="flex mb-5 gap-5">
          <div>PlatformSector</div>
          <div>SortSector</div>
        </section>
        <section>Main Game Grid</section>
      </div>
    </div>
  );
};

export default Home;
