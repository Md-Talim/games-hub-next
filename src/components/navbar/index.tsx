import SearchInput from "./search-input";
import Logo from "./logo";
import GenreMenu from "./genre-menu";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-20 gap-x-4 px-6 py-4">
      <Logo />

      <div className="flex items-center justify-between">
        <section>
          <SearchInput />
        </section>

        <div className="lg:hidden">
          <GenreMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
