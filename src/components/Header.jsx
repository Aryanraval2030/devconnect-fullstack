import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="border-2 border-[#2d3e58] bg-[#1e293b] h-[100px]">
        <div><h1>DevConnect</h1></div>
        <ul>
            <li className="cursor-pointer"><Link to='/' >home</Link></li>
            <li><Link to='/'>explore</Link></li>
            <li><Link to='/'>dashboard</Link></li>

        </ul>
      </div>
    </header>
  );
}

export default Header;
