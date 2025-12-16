import { TMDB_IMAGE_BASE_URL } from "@constants/tmdb";
import { CommonThumbnail } from "./common/CommonThumbnail";

export function MovieCard({ movieItem, onClick }) {
  return (
    <article className="cursor-pointer" onClick={onClick}>
      <ul className="flex flex-col gap-2">
        <li>
          {/* <img
            src={`${TMDB_IMAGE_BASE_URL}${movieItem.poster_path}`}
            alt={movieItem.title}
          /> */}
          <CommonThumbnail
            src={`${TMDB_IMAGE_BASE_URL}${movieItem.poster_path}`}
            alt={movieItem.title}
            width="100%"
            height="100%"
            propsClass="aspect-2/3 h-full"
          />
        </li>
        <li className="w-full truncate font-medium">{movieItem.title}</li>
        <li className="text-sm dark:text-gray-300">
          {movieItem.vote_average.toFixed(1)}
        </li>
      </ul>
    </article>
  );
}
