import Link from "next/link";
import { Suspense } from "react";
import { FaGithub } from "react-icons/fa";
import GenreMenu from "./genre-menu";
import Logo from "./logo";
import SearchInput from "./search-input";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-20 gap-x-4 px-6 py-4">
      <Logo />

      <Suspense>
        <SearchInput />
      </Suspense>

      <div className="flex items-center gap-4 justify-between">
        <Link
          href="https://github.com/md-talim/games-hub-next"
          target="_blank"
          className="block"
        >
          <FaGithub className="text-silverCloud h-5 w-5" />
        </Link>

        <div className="lg:hidden">
          <GenreMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
