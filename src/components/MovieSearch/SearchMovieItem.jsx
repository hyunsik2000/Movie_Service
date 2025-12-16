import { Link } from "react-router-dom";
import { TMDB_IMAGE_BASE_URL } from "@/constants/tmdb";
import { CommonThumbnail } from "../common/CommonThumbnail";

export function SearchMovieItem({ movie }) {
  return (
    <li className="mx-auto w-full max-w-[800px]">
      <Link
        to={`/details/${movie.id}`}
        className="flex h-full w-full cursor-pointer flex-col items-center gap-5 overflow-hidden rounded-lg bg-white p-4 transition-colors hover:bg-[#E5E7EB] sm:flex-row dark:bg-[#1E2024] dark:hover:bg-[#272A30]"
      >
        <div className="w-60 sm:w-[320px]">
          <CommonThumbnail
            src={`${TMDB_IMAGE_BASE_URL}${movie.backdrop_path}`}
            alt={movie.title}
            height="180px"
            propsClass=""
            objectFit="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <span className="line-clamp-2 text-sm font-medium text-[#4B5563] md:text-base dark:text-gray-300">
            {movie.title || "정보 없음"}
          </span>
        </div>
        <span className="flex h-7 shrink-0 items-center justify-center rounded bg-red-600 px-2 text-xs font-semibold whitespace-nowrap dark:text-gray-300">
          {movie.vote_average.toFixed(1)}
        </span>
      </Link>
    </li>
  );
}
