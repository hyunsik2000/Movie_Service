import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import { MovieCard } from "../MovieCard";
import { fetchMovies } from "@/utils/fetchMovies";
import { combineUrl } from "@/constants/url";

export function MovieList({ id }) {
  const navigate = useNavigate();
  const url = combineUrl(id);
  const { data } = fetchMovies(url);

  const movies = data.results;

  return (
    <Swiper
      key={url}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <MovieCard
            movieItem={movie}
            onClick={() => navigate(`/details/${movie.id}`)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
