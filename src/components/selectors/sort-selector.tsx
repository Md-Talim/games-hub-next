"use client";

import { sortOrders } from "@/lib/data";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentSortOrder = searchParams.get("ordering") || "Relevance";

  const toggleExpandMenu = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const updateParams = (sortValue: string) => {
    toggleExpandMenu();
    const params = new URLSearchParams(searchParams);
    params.set("ordering", sortValue);

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative w-56 text-sm font-sans">
      <button
        onClick={toggleExpandMenu}
        className="flex items-center justify-between w-full bg-licorice px-4 py-2 rounded-lg border border-codGray text-left"
      >
        <span>
          Sort By: <span className="font-bold">{currentSortOrder}</span>
        </span>
        <BsChevronDown
          className={clsx(
            isExpanded ? "rotate-180" : "rotate-0",
            "transition-transform"
          )}
        />
      </button>

      <ul
        className={clsx(
          "z-10 w-56 absolute top-full flex-col bg-licorice rounded-lg py-4 border border-codGray mt-4",
          isExpanded ? "flex" : "hidden"
        )}
      >
        {sortOrders.map((order) => (
          <li key={order.value} value={order.value}>
            <button
              onClick={() => updateParams(order.value)}
              className="w-full px-4 py-2 hover:bg-white hover:text-licorice text-left transition-colors"
            >
              {order.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortSelector;
