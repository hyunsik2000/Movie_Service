export function MovieDetailSkeleton() {
  const mockMovieDetail = {
    title: "가상의 영화 제목",
    vote_average: 8.8,
    genres: [
      { id: 1, name: "액션" },
      { id: 2, name: "드라마" },
      { id: 3, name: "스릴러" },
    ],
  };

  return (
    <section className="mx-auto flex w-5xl animate-pulse flex-col items-center gap-12 p-[10px_20px] sm:flex-row sm:items-start">
      <div className="aspect-2/3 w-full sm:w-[50%]">
        <div className="skeleton-text-bg h-full w-full" />
      </div>

      <ul className="flex w-full flex-1 flex-col gap-4 sm:mt-10 sm:w-[50%]">
        <li className="flex-between">
          <p className="skeleton-text-bg text-xl font-semibold md:text-3xl lg:text-4xl">
            {mockMovieDetail.title}
          </p>
          <p className="skeleton-text-bg text-lg font-semibold md:text-xl lg:text-2xl">
            {mockMovieDetail.vote_average}
          </p>
        </li>

        <li className="flex flex-wrap items-center gap-3 gap-y-2">
          {mockMovieDetail.genres.map((el) => (
            <span
              key={el.id}
              className="skeleton-text-bg rounded-full px-3 py-1 text-xs font-medium md:text-sm"
            >
              {el.name}
            </span>
          ))}
        </li>

        <li>
          <div className="flex flex-col gap-2">
            <p className="h-6 w-full rounded bg-gray-400 dark:bg-[#272A30]" />
            <p className="h-6 w-full rounded bg-gray-400 dark:bg-[#272A30]" />
            <p className="h-6 w-[80%] rounded bg-gray-400 dark:bg-[#272A30]" />
          </div>
        </li>
      </ul>
    </section>
  );
}
