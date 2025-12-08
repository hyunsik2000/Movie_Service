// src/components/MovieSearch/MovieThumbnail.jsx
import { useState } from "react";
import { TMDB_IMAGE_BASE_URL } from "../../constants/tmdb";

const fallbackImg =
  "https://designcompass.org/wp-content/uploads/2024/12/logo-netflix.png";

export function SearchThumbnail({ backdropPath, title }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const loadImgSrc = backdropPath
    ? `${TMDB_IMAGE_BASE_URL}${backdropPath}`
    : fallbackImg;

  return (
    <div className="h-[180px] shrink-0 overflow-hidden rounded bg-[#272A30]">
      {!isLoaded && <div className="animate-pulse bg-[#272A30]" />}
      <img
        src={loadImgSrc}
        alt={title}
        className={`h-full w-[320px] object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
