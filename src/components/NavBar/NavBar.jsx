import { Link } from "react-router-dom";
import { NAV_LINK } from "@constants/path";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import { SearchBar } from "../MovieSearch/SearchBar";
import { ThemeButton } from "./ThemeButton";

export function NavBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="app-theme fixed top-0 left-0 z-50 w-full">
      <div className="flex-between mx-auto h-[70px] max-w-5xl px-6">
        <div className="flex items-center gap-6">
          <a href="/">
            <div className="text-2xl font-bold text-red-600">NETFLIX</div>
          </a>
          <nav className="hidden sm:block">
            <ul className="nav-link-list">
              {NAV_LINK.map((el) => (
                <li key={el.id}>
                  <Link to={`${el.path}`}>{el.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="hidden items-center gap-2 text-sm text-gray-300 sm:flex">
          <button
            type="button"
            onClick={() => setIsSearchOpen((prev) => !prev)}
            className="cursor-pointer text-[#4B5563] hover:text-black dark:text-[#D1D5DB] dark:hover:text-white"
          >
            검색
          </button>
          <SearchBar isSearchOpen={isSearchOpen} />
          <button
            type="button"
            className="rounded bg-red-600 px-3 py-1.5 text-xs font-semibold hover:bg-red-700"
          >
            로그인
          </button>
          <ThemeButton />
        </div>
        <button
          type="button"
          className="cursor-pointer text-2xl text-gray-300 sm:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      <div
        className={`overflow-hidden px-6 text-white duration-500 sm:hidden ${isMenuOpen ? "max-h-[300px]" : "max-h-0"} `}
      >
        <ul className="nav-link-list flex flex-col gap-4 py-4">
          {NAV_LINK.map((el) => (
            <li key={el.id}>
              <Link to={el.path} onClick={() => setIsMenuOpen(false)}>
                {el.name}
              </Link>
            </li>
          ))}
          <ThemeButton />
          <button
            type="button"
            className="w-full rounded bg-red-600 px-3 py-1 text-lg font-semibold text-white transition-colors hover:bg-red-700"
          >
            로그인
          </button>
        </ul>
      </div>
    </header>
  );
}
