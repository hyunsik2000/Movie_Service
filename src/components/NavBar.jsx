import { Link } from "react-router-dom";
import { NAV_LINK } from "../data/path";

export function NavBar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#141517]">
      <div className="flex-between mx-auto h-[70px] max-w-5xl px-6">
        <div className="flex items-center gap-8">
          <a href="/">
            <div className="text-2xl font-bold text-red-600">NETFLIX</div>
          </a>
          <nav className="hidden sm:block">
            <ul className="flex items-center gap-4 text-sm text-gray-300 [&>li]:cursor-pointer [&>li]:hover:text-white">
              {NAV_LINK.map((el) => (
                <li key={el.id}>
                  <Link to={`${el.path}`}>{el.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-300">
          <button className="cursor-pointer hover:text-white">검색</button>
          <button className="rounded bg-red-600 px-3 py-1 text-xs font-semibold hover:bg-red-700">
            로그인
          </button>
        </div>
      </div>
    </header>
  );
}
