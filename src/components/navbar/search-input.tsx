"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const updateParams = (text: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("search", text);
    router.push(`/?${params.toString()}`);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        updateParams(searchValue);
      }}
    >
      <div className="w-52 md:w-96 flex items-center gap-3 py-2 px-4 bg-licorice rounded-md border border-codGray">
        <BsSearch className="h-5 w-5 text-mountainMist" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search game..."
          className="flex-1 text-lg bg-transparent text-springBud outline-none"
        />
      </div>
    </form>
  );
};

export default SearchInput;
