import { useNavigate } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";
import movieList from "../data/movieListData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto w-full max-w-[1200px]">
      <Swiper
        slidesPerView={4}
        breakpoints={{
          0: {
            slidesPerView: 1, // 모바일
          },
          640: {
            slidesPerView: 2, // sm
          },
          768: {
            slidesPerView: 3, // md
          },
          1024: {
            slidesPerView: 4, // lg
          },
        }}
      >
        {movieList.results.map((movieItem) => (
          <SwiperSlide key={movieItem.id}>
            <MovieCard
              movieItem={movieItem}
              onClick={() => {
                navigate("/details");
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Home;
