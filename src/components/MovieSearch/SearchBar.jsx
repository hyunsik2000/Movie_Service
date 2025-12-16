import { useNavigate } from "react-router-dom";

export function SearchBar({ isSearchOpen }) {
  const navigate = useNavigate();
  return (
    <input
      type="text"
      onChange={(e) => {
        navigate(`/search?keyword=${e.target.value}`);
      }}
      className={`rounded-lg border border-gray-300 bg-white px-1.5 py-1 text-sm text-gray-900 duration-300 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 ${
        isSearchOpen ? "max-w-[155px] opacity-100" : "max-w-0 opacity-0"
      }`}
    />
  );
}
