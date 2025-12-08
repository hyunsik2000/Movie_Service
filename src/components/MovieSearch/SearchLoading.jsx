export function SearchLoading() {
  return (
    <div className="flex-center py-10">
      <div className="flex flex-col items-center gap-3">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-500 border-t-red-600"></div>
        <p className="text-sm text-gray-400">검색 중입니다...</p>
      </div>
    </div>
  );
}
