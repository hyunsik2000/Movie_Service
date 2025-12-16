import { TMDB_API_BASE_URL } from "@/constants/tmdb";

export const TMDB_LIST = {
  POPULAR: "/movie/popular",
  TOP_RATED: "/movie/top_rated",
  NOW_PLAYING: "/movie/now_playing",
  UPCOMING: "/movie/upcoming",
  TRENDING_DAY: "/trending/movie/day",
  TRENDING_WEEK: "/trending/movie/week",
  DISCOVER_POPULAR: "/discover/movie",
  DISCOVER_TOP_RATED: "/discover/movie",
};

export function combineUrl(path, params = {}) {
  const search = new URLSearchParams({
    language: "ko-KR",
    page: "1",
    include_adult: "false",
    ...params,
  });

  return `${TMDB_API_BASE_URL}${path}?${search.toString()}`;
}
