import { TMDB_IMAGE_BASE_URL } from "../constants/tmdb";

export function MovieCard({ movieItem, onClick }) {
  const imgSrc = `${TMDB_IMAGE_BASE_URL}${movieItem.poster_path}`;

  return (
    <section className="w-[250px]" onClick={onClick}>
      <ul>
        <li>
          <img
            src={imgSrc}
            alt={movieItem}
            className="h-[375px] object-cover"
          />
        </li>
        <li className="w-full truncate">{movieItem.original_title}</li>
        <li>{movieItem.vote_average}</li>
      </ul>
    </section>
  );
}
