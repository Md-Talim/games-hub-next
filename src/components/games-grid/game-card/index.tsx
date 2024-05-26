import getOptimizedImage from "@/utils/get-omitimized-image";
import Image from "next/image";
import Link from "next/link";
import CriticScore from "./critic-score";
import Game from "@/types/game";

interface Props extends Game {}

const GameCard = ({
  background_image: backgroundImage,
  metacritic,
  slug,
  name,
}: Props) => (
  <Link href={`/game/${slug}`}>
    <article className="bg-licorice overflow-hidden rounded-3xl">
      <div className="w-full relative aspect-video">
        <Image src={getOptimizedImage(backgroundImage)} fill alt={name} />
      </div>
      <div className="p-5 space-y-4">
        <CriticScore score={metacritic} />
        <h3 className="text-2xl font-sans font-medium truncate">{name}</h3>
      </div>
    </article>
  </Link>
);

export default GameCard;
