import { Suspense } from "react";
import { ErrorFallback } from "@components/common/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import { MovieList } from "@components/MovieList/MovieList";
import { MovieListSkeleton } from "@components/MovieList/MovieListSkeleton";

function Home() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<MovieListSkeleton />}>
        <MovieList />
      </Suspense>
    </ErrorBoundary>
  );
}

export default Home;
