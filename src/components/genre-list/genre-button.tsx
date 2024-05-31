"use client";

import Genre from "@/types/Genre";
import getOptimizedImage from "@/utils/get-omitimized-image";
import clsx from "clsx";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props extends Genre {}

const GenreButton = ({ id, image_background: imageUrl, name }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    params.set("genres", id.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex gap-x-2">
      <Image
        src={getOptimizedImage(imageUrl)}
        height={32}
        width={32}
        alt={name}
        className="aspect-square rounded-md"
      />
      <button
        className={clsx(
          "text-lg truncate text-mountainMist",
          searchParams.get("genres") === id.toString()
            ? "font-bold text-springBud"
            : "font-normal"
        )}
        onClick={handleClick}
      >
        {name}
      </button>
    </div>
  );
};

export default GenreButton;
