import React from "react";
import moonLight from "../../assets/moon-light-mode.svg";
import moonDark from "../../assets/moon-dark-mode.svg";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header className="flex justify-between items-center py-3 px-4 md:px-12 md:py-6 shadow-md bg-(--elements) transition-colors duration-300">
      <h1 className="text-xl md:text-2xl font-bold">Where in the world?</h1>
      <button type="button" onClick={() => setIsDarkMode(!isDarkMode)} className="flex items-center gap-2  font-semibold cursor-pointer hover:opacity-80 transition-opacity">
        <img src={isDarkMode ? moonDark: moonLight} alt={isDarkMode ? "Light Mode" : "Dark Mode"} className={isDarkMode ? "invert" : ""} /> {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
