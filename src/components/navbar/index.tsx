import { Suspense } from "react";
import GenreMenu from "./genre-menu";
import Logo from "./logo";
import SearchInput from "./search-input";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-20 gap-x-4 px-6 py-4">
      <Logo />

      <div className="flex items-center justify-between">
        <Suspense>
          <SearchInput />
        </Suspense>

        <div className="lg:hidden">
          <GenreMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
