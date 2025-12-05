import { TMDB_IMAGE_BASE_URL } from "../constants/tmdb";

export function MovieCard({ movieItem, onClick }) {
  const imgSrc = `${TMDB_IMAGE_BASE_URL}${movieItem.poster_path}`;

  return (
    <article className="cursor-pointer" onClick={onClick}>
      <ul className="flex flex-col gap-2">
        <li>
          <div className="aspect-2/3 w-full">
            <img src={imgSrc} alt={movieItem} className="h-full object-cover" />
          </div>
        </li>
        <li className="w-full truncate font-medium">
          {movieItem.original_title}
        </li>
        <li className="text-sm text-gray-300">
          {movieItem.vote_average.toFixed(1)}
        </li>
      </ul>
    </article>
  );
}
