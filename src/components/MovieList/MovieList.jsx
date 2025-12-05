import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import { MovieCard } from "../MovieCard";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";

export function MovieList() {
  const navigate = useNavigate();
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const { data } = useFetch(url);
  const [movies] = useState(() =>
    data.results.filter((result) => result.adult === false),
  );

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={20}
      breakpoints={{
        0: { slidesPerView: 1 },
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
