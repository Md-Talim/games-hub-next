import SearchInput from "./search-input";
import Logo from "./logo";

const Navbar = () => {
  return (
    <nav className="flex items-center h-20 gap-x-4 px-5 py-4">
      <Logo />

      <section className="w-full">
        <SearchInput />
      </section>
    </nav>
  );
};

export default Navbar;
