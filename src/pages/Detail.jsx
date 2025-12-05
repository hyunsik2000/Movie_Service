import { Suspense } from "react";
import { ErrorFallback } from "../components/common/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import { MovieDetail } from "../components/MovieDetail/MovieDetail";
import { MovieDetailSkeleton } from "../components/MovieDetail/MovieDetailSkeleton";

function Detail() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<MovieDetailSkeleton />}>
        <MovieDetail />
      </Suspense>
    </ErrorBoundary>
  );
}

export default Detail;
