import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="border-t-2 border-[#273449] text-center pb-[5vh] pt-[5vh] text-xl w-[100%] mt-[10vh] ">
      <div className="flex justify-center gap-4">
        <ul className="w-[70%] flex justify-center gap-8 h-fit">
          <li>back to top</li>
          <li>Explore</li>
          <li>help</li>
          <li>about site</li>
          <li>language</li>
          <li>dashboard</li>
        </ul>
        <a href="#">
          <IoLogoInstagram size={30} />
        </a>
        <a href="#">
          <FaTelegramPlane size={30} />
        </a>
      </div>
      <div>
        <h1 className="text-[#60a5fa] text-lg md:text-2xl mt-[10vh]">
          <span>{`</DevConnect>`}</span>
        </h1>
      </div>
      <div className="text-center text-sm text-gray-400 mt-[5vh]">
        © 2026 Devconnect
      </div>
    </div>
  );
}

export default Footer;
