import Image from "next/image";

const GameCardSkeleton = () => (
  <article className="bg-licorice overflow-hidden rounded-3xl">
    <div className="w-full relative aspect-video">
      <Image src="/no-image.webp" fill alt="loading..." />
    </div>
    <div className="p-6 space-y-3">
      <div className="animate-pulse w-6 h-4 bg-gamersGlory rounded-sm opacity-10" />
      <div className="animate-pulse w-40 h-6 bg-silverCloud rounded-sm" />
      <div className="flex items-center gap-x-3">
        <div className="animate-pulse h-4 w-4 bg-mountainMist rounded-full" />
        <div className="animate-pulse h-4 w-4 bg-mountainMist rounded-full" />
        <div className="hanimate-pulse -4 w-4 bg-mountainMist rounded-full" />
      </div>
    </div>
  </article>
);

const GamesGridSkeleton = () => {
  const elements = new Array(8).fill(null);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {elements.map((_, index) => (
        <div key={index}>
          <GameCardSkeleton />
        </div>
      ))}
    </section>
  );
};

export default GamesGridSkeleton;
