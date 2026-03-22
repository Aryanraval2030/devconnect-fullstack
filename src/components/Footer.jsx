import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="border-t-2 border-[#273449] mt-[10vh] px-4 py-8 text-white">
      
      {/* 🔹 Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* 🔸 Menu */}
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base text-center">
          <li className="cursor-pointer hover:text-blue-400">Back to top</li>

          <li>
            <Link to="/explore" className="hover:text-blue-400">
              Explore
            </Link>
          </li>

          <li className="cursor-pointer hover:text-blue-400">Help</li>
          <li className="cursor-pointer hover:text-blue-400">About</li>
          <li className="cursor-pointer hover:text-blue-400">Language</li>

          <li>
            <Link to="/dashboard" className="hover:text-blue-400">
              Dashboard
            </Link>
          </li>
        </ul>

        {/* 🔸 Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-pink-500">
            <IoLogoInstagram size={26} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaTelegramPlane size={26} />
          </a>
        </div>
      </div>

      {/* 🔹 Logo */}
      <div className="text-center mt-8">
        <h1 className="text-[#60a5fa] text-xl md:text-2xl font-bold">
          {`</DevConnect>`}
        </h1>
      </div>

      {/* 🔹 Bottom */}
      <div className="text-center text-xs md:text-sm text-gray-400 mt-4">
        © 2026 DevConnect. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;