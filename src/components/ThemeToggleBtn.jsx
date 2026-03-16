import React, { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  useEffect(() => {
    const preferDarkMode = window.matchMedia(
      "(prefers-color-scheme:dark)",
    ).matches;
    setTheme(theme || (preferDarkMode ? "dark" : "light"));
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <button
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-500"
      >
        {theme === "dark" ? (
          <img
            src={assets.sun_icon}
            className="h-5 w-5"
            alt="sun icon"
          />
        ) : (
          <img
            src={assets.moon_icon}
            className="h-5 w-5"
            alt="moon icon"
          />
        )}
      </button>
    </>
  );
};

export default ThemeToggleBtn;
