import Box from "../components/Box";
import { FaRegUser } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import { FaTrophy } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";

function Sectionfirst() {
  return (
    <div>
      <div className="text-4xl text-white text-center px-[30px] mt-[15vh]">
        <div className="text-center px-4 sm:px-6 mt-[10vh] md:mt-[15vh]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-snug">
            Empowering Developers Worldwide
          </h1>

          <h1 className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-2 leading-relaxed">
            Everything you need to connect, collaborate, and grow as a
            developer.
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 md:gap-4 sm:gap-2 justify-center p-10">
        <Box
          icon={<FaRegUser size={40} className="mt-1 mb-1" />}
          title="Collaborate Seamlessly"
          description="Connect with developers worldwide and bring your ideas to life together."
        />
        <Box
          icon={<FaGlobe size={40} className="mt-1 mb-1" />}
          title="share your code"
          description="Showcase your best snippets and get real feedback."
        />
        <Box
          icon={<FcIdea size={40} className="mt-1 mb-1" />}
          title="Share Knowledge"
          description="Express your thoughts through posts, images, videos, or embedded code."
        />
        <Box
          icon={<FaTrophy size={40} className="mt-1 mb-1" />}
          title="Climb the Ranks"
          description="Earn achievements and gain recognition for your contributions."
        />
        <Box
          icon={<FaProjectDiagram size={40} className="mt-1 mb-1" />}
          title=" Showcase Projects"
          description="Present your work beautifully with live and visual previews."
        />
        <Box
          icon={<FaLightbulb size={40} className="mt-1 mb-1 " />}
          title="Stay Inspired"
          description="Follow top devs and explore trending technologies."
        />
      </div>
    </div>
  );
}

export default Sectionfirst;
