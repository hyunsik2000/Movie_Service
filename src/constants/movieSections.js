import { combineUrl, TMDB_LIST } from "@/constants/url";

export const MOVIE_SECTIONS = [
  {
    title: "인기 영화",
    url: combineUrl(TMDB_LIST.POPULAR),
  },
  {
    title: "금주의 트렌드",
    url: combineUrl(TMDB_LIST.TRENDING_WEEK),
  },
  {
    title: "오늘의 트렌드",
    url: combineUrl(TMDB_LIST.TRENDING_DAY),
  },
  {
    title: "평점 높은 영화",
    url: combineUrl(TMDB_LIST.TOP_RATED),
  },
  {
    title: "현재 상영중",
    url: combineUrl(TMDB_LIST.NOW_PLAYING),
  },
  {
    title: "개봉 예정",
    url: combineUrl(TMDB_LIST.UPCOMING),
  },
];
