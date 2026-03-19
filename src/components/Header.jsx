import { Link } from "react-router-dom";
import ThemeContext from "./UserContext";
import { useContext } from "react";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="flex justify-center">
      <div
        className="
        bg-[#0f172a]/90 
        mt-[20px] 
        border-2 border-[#2a395c] 
        w-[95%] md:w-[90%] 
        py-4 md:py-5 
        text-[#ffffff] font-[500] 
        flex justify-between items-center 
        px-4 md:px-8 
        text-lg md:text-2xl 
        backdrop-blur-[6] 
        fixed z-20 
        rounded-full
        
      "
      >
        {/* Logo */}
        <div>
          <h1 className="text-[#60a5fa] text-lg md:text-2xl">
            <span className="hidden min-[400px]:inline">{`</DevConnect>`}</span>
            <span className="inline min-[400px]:hidden">{`</DC>`}</span>
          </h1>
        </div>

        {/* Nav */}
        <ul
          className="
          flex items-center 
          gap-4 md:gap-10
        "
        >
          <li className="cursor-pointer">
            <Link to="/">home</Link>
          </li>

          <li className="hidden sm:block">
            <a href="#explore">explore</a>
          </li>

          <li>
            <Link to="/dashboard">dashboard</Link>
          </li>

          <li>
            <button onClick={toggleTheme} className="px-2 md:px-3 py-1 rounded">
              {theme === "light" ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
