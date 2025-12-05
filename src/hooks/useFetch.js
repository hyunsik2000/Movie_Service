// 글로벌 캐시 (요청별로 저장)
const cache = new Map();

export function useFetch(url) {
  const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
  const key = url + (token || "");

  // 1) 캐시에 데이터가 있으면
  if (cache.has(key)) {
    const entry = cache.get(key);

    if (entry.status === "success") {
      return { data: entry.data, error: null, loading: false };
    }
    if (entry.status === "error") {
      throw entry.error; // ErrorBoundary 트리거
    }
    if (entry.status === "pending") {
      throw entry.promise; // Suspense fallback 트리거
    }
  }

  // 2) 캐시에 없으면
  let resolve, reject;

  const promise = new Promise((res, rej) => {
    // 일단 대기 상태
    resolve = res;
    reject = rej;
  });

  // 캐시 초기값 저장
  cache.set(key, {
    status: "pending",
    promise,
    data: null,
    error: null,
  });

  // 실제 fetch 수행
  fetch(url, {
    headers: {
      accept: "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error(`API 오류: ${res.status}`);
      return res.json();
    })
    .then((json) => {
      cache.set(key, {
        status: "success",
        data: json,
        error: null,
        promise: null,
      });
      resolve(json); // Suspense가 다시 렌더하도록 resolve
    })
    .catch((err) => {
      cache.set(key, {
        status: "error",
        data: null,
        error: err,
        promise: null,
      });
      reject(err);
    });
  throw promise; // 최초 요청 시 Suspense fallback 트리거
}
