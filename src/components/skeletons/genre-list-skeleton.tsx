const GenreListSkeleton = () => {
  const elements = new Array(20).fill(null);

  return (
    <>
      <h2 className="text-3xl font-bold uppercase">Genres</h2>
      <ul className="space-y-4 mt-6">
        {elements.map((_, index) => (
          <li key={index}>
            <div className="flex gap-2">
              <div className="w-8 aspect-square rounded-md bg-mineShaft" />
              <div className="w-20 h-4 bg-silverCloud" />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenreListSkeleton;
