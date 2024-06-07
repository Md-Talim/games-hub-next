import Image from "next/image";

const GameCardSkeleton = () => (
  <article className="bg-licorice overflow-hidden rounded-3xl">
    <div className="w-full relative aspect-video">
      <Image src="/no-image.webp" fill alt="loading..." />
    </div>
    <div className="p-6 space-y-3">
      <div className="w-6 h-4 bg-gamersGlory rounded-sm opacity-10" />
      <div className="w-40 h-6 bg-silverCloud rounded-sm" />
      <div className="flex items-center gap-x-3">
        <div className="h-4 w-4 bg-mountainMist rounded-full" />
        <div className="h-4 w-4 bg-mountainMist rounded-full" />
        <div className="h-4 w-4 bg-mountainMist rounded-full" />
      </div>
    </div>
  </article>
);

const GamesGridSkeleton = () => {
  const elements = new Array(6).fill(null);

  return (
    <section className="grid grid-cols-12 gap-5">
      {elements.map((_, index) => (
        <div key={index} className="col-span-4">
          <GameCardSkeleton />
        </div>
      ))}
    </section>
  );
};

export default GamesGridSkeleton;
