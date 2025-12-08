import { useSearchParams } from "react-router-dom";
import { useDebounce } from "@hooks/useDebounce";
import { useSearchFetch } from "@hooks/useSearchFetch";
import { SearchLoading } from "@components/MovieSearch/SearchLoading";
import { SearchMovieList } from "@components/MovieSearch/SearchMovieList";

export function Search() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  const debouncedKeyword = useDebounce(keyword, 300);

  const { data: results, loading, error } = useSearchFetch(debouncedKeyword);

  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      {loading && <SearchLoading />}
      {error && <p>오류가 발생했습니다. {error.message}</p>}
      {!loading && <SearchMovieList results={results} />}
    </section>
  );
}
