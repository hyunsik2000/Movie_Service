// src/components/MovieSearch/SearchMovieItem.jsx
import { Link } from "react-router-dom";
import { SearchThumbnail } from "./SearchThumbnail";

export function SearchMovieItem({ movie }) {
  return (
    <li className="mx-auto h-[200px] w-full max-w-[800px]">
      <Link
        to={`/details/${movie.id}`}
        className="flex h-full w-full cursor-pointer items-center gap-5 overflow-hidden rounded-lg bg-[#1E2024] p-4 transition-colors hover:bg-[#272A30]"
      >
        <SearchThumbnail
          backdropPath={movie.backdrop_path}
          title={movie.title}
        />

        <div className="flex flex-1 flex-col justify-center overflow-hidden">
          <span className="line-clamp-2 text-sm font-medium text-white md:text-base">
            {movie.title || "정보 없음"}
          </span>
        </div>

        <span className="flex h-7 min-w-[38px] shrink-0 items-center justify-center rounded bg-red-600 px-2 text-xs font-semibold whitespace-nowrap text-white">
          {movie.vote_average.toFixed(1)}
        </span>
      </Link>
    </li>
  );
}
