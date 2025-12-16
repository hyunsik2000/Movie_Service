import { useCallback, useRef, useState } from "react";
import { TMDB_API_BASE_URL, TMDB_ACCESS_TOKEN } from "@constants/tmdb";

export function useFetchVideo(movieId) {
  const [movieVideo, setMovieVideo] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const hasFetchedRef = useRef(false);

  const showMovieVideo = useCallback(async () => {
    setIsOpen(true);
    if (hasFetchedRef.current) return;
    setIsLoading(true);
    try {
      const res = await fetch(
        `${TMDB_API_BASE_URL}/movie/${movieId}/videos?language=ko-KR`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
          },
        },
      );

      if (!res.ok) {
        throw new Error(`API 오류 : ${res.status}`);
      }

      const data = await res.json();

      if (!data.results || data.results.length === 0) {
        setMovieVideo(null);
      } else {
        const youtubeTrailer =
          data.results.find(
            (video) => video.site === "YouTube" && video.type === "Trailer",
          ) ??
          data.results.find((video) => video.site === "YouTube") ??
          data.results[0];
        setMovieVideo(youtubeTrailer ?? null);
      }
      hasFetchedRef.current = true;
    } catch (error) {
      console.error(error);
      setMovieVideo(null);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  const hideMovieVideo = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { movieVideo, isOpen, isLoading, showMovieVideo, hideMovieVideo };
}
