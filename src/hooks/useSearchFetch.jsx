import { useState, useEffect } from "react";
import { TMDB_API_BASE_URL } from "../constants/tmdb";

export function useSearchFetch(keyword) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!keyword || !keyword.trim()) {
      setData([]);
      return;
    }
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

        const res = await fetch(
          `${TMDB_API_BASE_URL}/search/movie?query=${keyword}&page=1&language=ko-KR&include_adult=false&region=KR`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!res.ok) {
          throw new Error(`검색 API 오류: ${res.status}`);
        }

        const json = await res.json();
        setData(json.results || []);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [keyword]);

  return { data, loading, error };
}
