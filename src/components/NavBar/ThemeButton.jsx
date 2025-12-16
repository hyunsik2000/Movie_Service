import { useThemeStore } from "@/store/useThemeStore";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

export function ThemeButton() {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex cursor-pointer items-center rounded bg-gray-600 px-1 py-1 text-xs text-black dark:bg-gray-400 dark:text-white"
    >
      {theme === "dark" ? (
        <>
          <HiOutlineSun className="text-yellow-400" size={22} />
        </>
      ) : (
        <>
          <HiOutlineMoon className="text-blue-300" size={22} />
        </>
      )}
    </button>
  );
}
