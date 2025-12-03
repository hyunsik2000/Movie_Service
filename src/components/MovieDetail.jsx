import { TMDB_IMAGE_BASE_URL } from "../constants/tmdb";
import movieDetail from "../data/movieDetailData.json";

export function MovieDetail() {
  const imgSrc = `${TMDB_IMAGE_BASE_URL}${movieDetail.poster_path}`;

  return (
    <section className="flex max-w-5xl flex-col items-center sm:flex-row">
      <img
        src={imgSrc}
        alt={movieDetail}
        className="h-full w-full object-contain p-[10px_20px] sm:w-[50%]"
      />

      <ul className="flex flex-col gap-4 p-[10px_20px]">
        <li className="flex-between">
          <p className="flex-between text-xl md:text-3xl lg:text-4xl">
            {movieDetail.title}
          </p>
          <p className="flex-between text-xl md:text-xl lg:text-2xl">
            {movieDetail.vote_average}
          </p>
        </li>
        <li className="flex flex-wrap items-center gap-4 gap-y-2">
          {movieDetail.genres.map((el) => (
            <span key={el.id} className="text-sm md:text-xl lg:text-2xl">
              {el.name}
            </span>
          ))}
        </li>
        <li>
          <p className="text-lg md:text-lg lg:text-3xl">
            {movieDetail.overview}
          </p>
        </li>
      </ul>
    </section>
  );
}
