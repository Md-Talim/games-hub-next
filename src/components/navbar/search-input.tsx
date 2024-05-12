"use client";

const SearchInput = () => {
  const handleSearch = () => {};

  return (
    <form onSubmit={handleSearch} className="w-4/5 mx-auto">
      <input
        type="text"
        placeholder="SEARCH GAME"
        className="text-xl rounded-full w-full border-3 border-white px-8 py-2 bg-black text-springBud"
      />
    </form>
  );
};

export default SearchInput;
