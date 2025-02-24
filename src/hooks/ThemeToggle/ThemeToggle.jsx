import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
       className="flex items-center gap-2 p-2 rounded bg-indigo-500 dark:bg-gray-700 text-white hover:bg-indigo-600 dark:hover:bg-gray-600 transition duration-300"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <>
          <FaMoon /> 
        </>
      ) : (
        <>
          <FaSun /> 
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
