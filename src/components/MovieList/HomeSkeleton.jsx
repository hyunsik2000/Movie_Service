import { MovieListSkeleton } from "@components/MovieList/MovieListSkeleton";

export function HomeSkeleton({ sections }) {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5">
      {sections.map(({ title, url }) => (
        <div key={url ?? title}>
          <div className="mb-4 h-7 w-40 animate-pulse rounded bg-gray-300 dark:bg-[#272A30]" />
          <MovieListSkeleton count={4} />
        </div>
      ))}
    </section>
  );
}
