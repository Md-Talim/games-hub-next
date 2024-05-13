import getOptimizedImage from "@/utils/get-omitimized-image";
import Image from "next/image";

interface Props {
  imageUrl: string;
  name: string;
}

const GenreButton = ({ imageUrl, name }: Props) => {
  return (
    <div className="flex gap-x-2">
      <Image
        src={getOptimizedImage(imageUrl)}
        height={32}
        width={32}
        alt={name}
        className="aspect-square rounded-md"
      />
      <button className="text-lg truncate text-mountainMist">{name}</button>
    </div>
  );
};

export default GenreButton;
