import { useParams } from "react-router-dom";
import { fetchMovies } from "@/utils/fetchMovies";
import {
  FALLBACK_IMG,
  TMDB_API_BASE_URL,
  TMDB_IMAGE_BASE_URL,
} from "@constants/tmdb";

export function MovieDetail() {
  const { id } = useParams();
  const url = `${TMDB_API_BASE_URL}/movie/${id}?language=ko-KR`;

  const { data: movieDetail } = fetchMovies(url);

  if (!movieDetail) return null;

  const imgSrc = movieDetail.poster_path
    ? `${TMDB_IMAGE_BASE_URL}${movieDetail.poster_path}`
    : FALLBACK_IMG;

  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center gap-12 p-[10px_20px] sm:flex-row sm:items-start">
      <div className="aspect-2/3 w-full sm:w-[50%]">
        <img
          src={imgSrc}
          alt={movieDetail.title}
          className="h-full w-full object-cover"
        />
      </div>
      <ul className="flex w-full flex-1 flex-col gap-4 sm:mt-10 sm:flex sm:w-[50%]">
        <li className="flex-between">
          <p className="text-xl font-semibold text-[#111827] md:text-3xl lg:text-4xl dark:text-[#F9FAFB]">
            {movieDetail.title}
          </p>
          <p className="text-lg font-semibold text-red-600 md:text-xl lg:text-2xl">
            {movieDetail.vote_average.toFixed(1)}
          </p>
        </li>

        <li className="flex flex-wrap items-center gap-3 gap-y-2">
          {movieDetail.genres.map((el) => (
            <span
              key={el.id}
              className="rounded-full bg-[#E5E7EB] px-3 py-1 text-xs font-medium text-[#374151] md:text-sm dark:bg-[#272A30] dark:text-[#E5E7EB]"
            >
              {el.name}
            </span>
          ))}
        </li>

        <li>
          <p className="text-sm leading-relaxed text-[#374151] md:text-base lg:text-lg dark:text-[#E5E7EB]">
            {movieDetail.overview || "줄거리 정보가 없습니다."}
          </p>
        </li>
      </ul>
    </section>
  );
}
