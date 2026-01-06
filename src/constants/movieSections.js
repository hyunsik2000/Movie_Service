import { TMDB_LIST } from "@/constants/url";

export const MOVIE_SECTIONS = [
  {
    title: "인기 영화",
    id: TMDB_LIST.POPULAR,
  },
  {
    title: "금주의 트렌드",
    id: TMDB_LIST.TRENDING_WEEK,
  },
  {
    title: "오늘의 트렌드",
    id: TMDB_LIST.TRENDING_DAY,
  },
  {
    title: "평점 높은 영화",
    id: TMDB_LIST.TOP_RATED,
  },
  {
    title: "현재 상영중",
    id: TMDB_LIST.NOW_PLAYING,
  },
  {
    title: "개봉 예정",
    id: TMDB_LIST.UPCOMING,
  },
];
