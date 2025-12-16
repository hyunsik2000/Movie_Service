import { Suspense } from "react";
import { ErrorFallback } from "@components/common/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import { MovieList } from "@components/MovieList/MovieList";
import { MOVIE_SECTIONS } from "@/constants/movieSections";
import { HomeSkeleton } from "@/components/MovieList/HomeSkeleton";

function Home() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<HomeSkeleton sections={MOVIE_SECTIONS} />}>
        <section className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5">
          {MOVIE_SECTIONS.map(({ title, url }) => (
            <div key={title}>
              <h2 className="mb-4 text-xl font-bold">{title}</h2>
              <MovieList url={url} />
            </div>
          ))}
        </section>
      </Suspense>
    </ErrorBoundary>
  );
}

export default Home;
