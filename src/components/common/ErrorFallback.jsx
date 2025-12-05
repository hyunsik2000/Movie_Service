export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <section className="flex-center min-h-[calc(100vh-70px)]">
      <div className="p-4 text-2xl text-red-500">
        <p>문제가 발생했어요 😢</p>
        <p className="mt-2 text-sm">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="mt-3 rounded bg-gray-800 px-3 py-1 text-sm text-white"
        >
          다시 시도
        </button>
      </div>
    </section>
  );
}
