import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-center">
      <div className="bg-[#0f172a]/90 mt-[20px] border-2 border-[#2a395c] w-[90%]  h-[auto] py-5 text-[#ffffff] font-[500] flex justify-center items-center gap-[30rem] text-2xl backdrop-blur-[6] fixed z-10 rounded-full">
        <div>
          <h1 className="text-[#60a5fa]">{`</DevConnect>`}</h1>
        </div>
        <ul className="flex justify-between items-center gap-10">
          <li className="cursor-pointer">
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/explore">explore</Link>
          </li>
          <li>
            <Link to="/dashboard">dashboard</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
