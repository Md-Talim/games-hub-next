"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push, replace } = useRouter();

  const updateParams = (text: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("search", text);

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current) {
          push("/");
          updateParams(ref.current.value);
        }
      }}
    >
      <div className="w-full md:w-96 flex items-center gap-3 py-2 px-4 bg-licorice rounded-md border border-codGray">
        <BsSearch className="h-5 w-5 text-mountainMist" />
        <input
          ref={ref}
          type="text"
          placeholder="Searh game..."
          className="flex-1 text-lg bg-transparent text-springBud outline-none"
        />
      </div>
    </form>
  );
};

export default SearchInput;
