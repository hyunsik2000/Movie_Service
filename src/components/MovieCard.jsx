import { TMDB_IMAGE_BASE_URL } from "../constants/tmdb";

export function MovieCard({ movieItem, onClick }) {
  const imgSrc = `${TMDB_IMAGE_BASE_URL}${movieItem.poster_path}`;

  return (
    <section className="w-[280px] cursor-pointer" onClick={onClick}>
      <ul className="flex flex-col gap-2">
        <li>
          <div className="h-[450px] w-full overflow-hidden">
            <img src={imgSrc} alt={movieItem} className="h-full object-cover" />
          </div>
        </li>
        <li className="w-full truncate font-medium">
          {movieItem.original_title}
        </li>
        <li className="text-sm text-gray-300">{movieItem.vote_average}</li>
      </ul>
    </section>
  );
}
