import { useNavigate } from "react-router-dom";

export function SearchBar({ isSearchOpen }) {
  const navigate = useNavigate();
  return (
    <input
      type="text"
      onChange={(e) => {
        navigate(`/search?keyword=${e.target.value}`);
      }}
      className={`transform rounded bg-white px-1 py-1 text-sm text-black transition-all duration-300 ${
        isSearchOpen ? "max-w-[155px] opacity-100" : "max-w-0 opacity-0"
      }`}
    />
  );
}
