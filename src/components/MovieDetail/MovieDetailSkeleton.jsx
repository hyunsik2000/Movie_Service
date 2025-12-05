export function MovieDetailSkeleton() {
  return (
    <section className="flex w-5xl animate-pulse flex-col items-center sm:flex-row">
      <div className="h-full w-full p-[10px_20px] sm:w-[50%]">
        <div className="aspect-2/3 w-full bg-[#1E2024]" />
      </div>

      <ul className="flex w-full flex-col gap-4 p-[10px_20px] sm:w-[50%]">
        <li className="flex-between">
          <p className="flex-between h-10 w-4/5 rounded bg-[#272A30] text-xl md:text-3xl lg:text-4xl" />
          <p className="flex-between h-8 w-1/10 rounded bg-[#272A30] text-xl md:text-xl lg:text-2xl" />
        </li>

        <li className="flex flex-wrap items-center gap-4 gap-y-2">
          <span className="h-7 w-1/6 rounded bg-[#272A30]" />
          <span className="h-7 w-1/6 rounded bg-[#272A30]" />
          <span className="h-7 w-1/6 rounded bg-[#272A30]" />
          <span className="h-7 w-1/6 rounded bg-[#272A30]" />
          <span className="h-7 w-1/6 rounded bg-[#272A30]" />
        </li>

        <li>
          <div className="flex flex-col gap-2">
            <p className="h-8 w-full rounded bg-[#1E2024]" />
            <p className="h-8 w-full rounded bg-[#1E2024]" />
            <p className="h-8 w-[80%] rounded bg-[#1E2024]" />
            <p className="h-8 w-[50%] rounded bg-[#1E2024]" />
          </div>
        </li>
      </ul>
    </section>
  );
}
