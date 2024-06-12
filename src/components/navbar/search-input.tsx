"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";

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
      className="w-4/5 mx-auto"
    >
      <input
        ref={ref}
        type="text"
        placeholder="SEARCH GAME"
        className="text-xl rounded-full w-full border-3 border-white px-8 py-2 bg-black text-springBud"
      />
    </form>
  );
};

export default SearchInput;
