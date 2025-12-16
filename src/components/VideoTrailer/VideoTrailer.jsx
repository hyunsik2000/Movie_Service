import { useFetchVideo } from "@/hooks/useFetchVideo";

export function VideoTrailer({ movieId, title, children }) {
  const { movieVideo, isOpen, isLoading, showMovieVideo, hideMovieVideo } =
    useFetchVideo(movieId);

  return (
    <div
      className="relative aspect-2/3 w-full overflow-hidden rounded-lg"
      onMouseEnter={showMovieVideo}
      onMouseLeave={hideMovieVideo}
    >
      {children}
      {isOpen && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80">
          {isLoading && (
            <span className="text-sm text-white">
              영상 정보를 불러오는 중...
            </span>
          )}

          {!isLoading && movieVideo === null && (
            <span className="text-xs text-gray-200">영상 정보가 없습니다.</span>
          )}

          {!isLoading &&
            movieVideo !== null &&
            movieVideo.site === "YouTube" && (
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${movieVideo.key}?autoplay=1&mute=1&controls=0`}
                title={`${title} video`}
                allow="autoplay; encrypted-media"
                allowFullScreen={false}
              />
            )}
        </div>
      )}
    </div>
  );
}
