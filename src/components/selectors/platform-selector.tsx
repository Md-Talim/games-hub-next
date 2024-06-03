"use client";

import { platforms } from "@/lib/data";
import Platform from "@/types/Platform";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const toggleExpandMenu = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const updateParams = (platform: Platform) => {
    toggleExpandMenu();
    setSelectedPlatform(platform);
    const params = new URLSearchParams(searchParams);
    params.set("parent_platforms", platform.id.toString());

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative w-56 text-sm font-sans">
      <button
        onClick={toggleExpandMenu}
        className={clsx(
          "flex items-center justify-between w-full bg-licorice px-4 py-2 rounded-lg border border-codGray text-left",
          selectedPlatform && "bg-white text-licorice"
        )}
      >
        {selectedPlatform?.name || "Platform"}
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
        {platforms.map((platform) => (
          <li key={platform.id}>
            <button
              onClick={() => updateParams(platform)}
              className="w-full px-4 py-2 hover:bg-white hover:text-licorice text-left transition-colors"
            >
              {platform.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlatformSelector;
