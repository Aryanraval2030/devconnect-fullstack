import { Link } from "react-router-dom";
import ThemeContext from "./UserContext";
import { useContext } from "react";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="flex justify-center">
      <div className="bg-[#0f172a]/90 mt-[20px] border-2 border-[#2a395c] w-[90%]  h-[auto] py-5 text-[#ffffff] font-[500] flex justify-center items-center gap-[30rem] text-2xl backdrop-blur-[6] fixed z-20 rounded-full">
        <div>
          <h1 className="text-[#60a5fa]">{`</DevConnect>`}</h1>
        </div>
        <ul className="flex justify-between items-center gap-10">
          <li className="cursor-pointer">
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#explore">explore</a>
          </li>
          <li>
            <Link to="/dashboard">dashboard</Link>
          </li>
          <li>
            <button onClick={toggleTheme} className="border px-3 py-1 rounded">
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
