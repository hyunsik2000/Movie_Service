import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function MovieListSkeleton({ count = 8 }) {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        className="w-full"
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {Array.from({ length: count }).map((_, idx) => (
          <SwiperSlide key={idx}>
            <article className="w-full animate-pulse">
              <div className="flex flex-col gap-2">
                <div className="aspect-2/3 w-full overflow-hidden rounded bg-gray-300 dark:bg-[#1E2024]" />
                <div className="h-4 w-4/5 rounded bg-gray-300 dark:bg-[#1E2024]" />
                <div className="h-4 w-1/4 rounded bg-gray-300 dark:bg-[#1E2024]" />
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
