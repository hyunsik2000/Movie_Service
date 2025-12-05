import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { TMDB_IMAGE_BASE_URL } from "../../constants/tmdb";

export function MovieDetail() {
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const { data: movieDetail } = useFetch(url);

  const imgSrc = `${TMDB_IMAGE_BASE_URL}${movieDetail.poster_path}`;

  return (
    <section className="flex max-w-5xl flex-col items-center sm:flex-row">
      <img
        src={imgSrc}
        alt={movieDetail.title}
        className="h-full w-full p-[10px_20px] sm:w-[50%]"
      />

      <ul className="flex flex-col gap-4 p-[10px_20px]">
        <li className="flex-between">
          <p className="flex-between text-xl md:text-3xl lg:text-4xl">
            {movieDetail.title}
          </p>
          <p className="flex-between text-xl md:text-xl lg:text-2xl">
            {movieDetail.vote_average.toFixed(1)}
          </p>
        </li>

        <li className="flex flex-wrap items-center gap-4 gap-y-2">
          {movieDetail.genres.map((el) => (
            <span key={el.id} className="md:text-md text-sm lg:text-xl">
              {el.name}
            </span>
          ))}
        </li>

        <li>
          <p className="text-lg md:text-lg lg:text-2xl">
            {movieDetail.overview}
          </p>
        </li>
      </ul>
    </section>
  );
}
