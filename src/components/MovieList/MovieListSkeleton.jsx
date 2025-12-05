import { Swiper, SwiperSlide } from "swiper/react";

export function MovieListSkeleton() {
  return (
    <section>
      <ul className="flex gap-5">
        <li className="flex w-[285px] flex-col gap-2">
          <div className="h-[427.5px] w-[285px] bg-[#1E2024]" />
          <div className="h-4 w-3/5 rounded-sm bg-[#272A30]" />
          <div className="h-5 w-6 rounded-sm bg-[#272A30]" />
        </li>
        <li className="flex w-[285px] flex-col gap-2">
          <div className="h-[427.5px] w-[285px] bg-[#1E2024]" />
          <div className="h-4 w-3/5 rounded-sm bg-[#272A30]" />
          <div className="h-5 w-6 rounded-sm bg-[#272A30]" />
        </li>
        <li className="flex w-[285px] flex-col gap-2">
          <div className="h-[427.5px] w-[285px] bg-[#1E2024]" />
          <div className="h-4 w-3/5 rounded-sm bg-[#272A30]" />
          <div className="h-5 w-6 rounded-sm bg-[#272A30]" />
        </li>
        <li className="flex w-[285px] flex-col gap-2">
          <div className="h-[427.5px] w-[285px] bg-[#1E2024]" />
          <div className="h-4 w-3/5 rounded-sm bg-[#272A30]" />
          <div className="h-5 w-6 rounded-sm bg-[#272A30]" />
        </li>
      </ul>
    </section>
  );
}
