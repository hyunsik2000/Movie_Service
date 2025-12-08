import { SearchMovieItem } from "./SearchMovieItem";

export function SearchMovieList({ results }) {
  if (!results || results.length === 0) {
    return (
      <p className="py-10 text-center text-gray-400">검색 결과가 없습니다.</p>
    );
  }

  return (
    <ul className="flex flex-col gap-3 overflow-y-hidden">
      {results.map((movie) => (
        <SearchMovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
