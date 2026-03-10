import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="bg-[#1e293b]/300 h-[100px] text-[#ffffff] font-[500] flex justify-center items-center gap-[30rem] text-2xl backdrop-blur-[5]">
        <div>
          <h1 className="text-[#60a5fa]">DevConnect</h1>
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
