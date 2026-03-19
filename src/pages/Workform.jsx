import { MdManageAccounts } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoProjectSymlink } from "react-icons/go";
import { FaHandshake } from "react-icons/fa";

function Workform() {
  const steps = [
    {
      icon: <MdManageAccounts size={40} />,
      title: "Create Account",
      desc: "Join the global community",
    },
    {
      icon: <CgProfile size={40} />,
      title: "Build Profile",
      desc: "Showcase your expertise",
    },
    {
      icon: <GoProjectSymlink size={40} />,
      title: "Share Projects",
      desc: "Get feedback on your work",
    },
    {
      icon: <FaHandshake size={40} />,
      title: "Connect Developers",
      desc: "Collaborate and grow",
    },
  ];

  return (
    <div className="py-24 text-center ">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
          How <span className="text-blue-500">DevConnect</span> Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group border border-slate-800 rounded-3xl p-8 flex flex-col items-center transition-all duration-300 hover:border-blue-500 hover:-translate-y-2"
            >
              <div className="text-blue-500 group-hover:text-blue-400 transition-colors mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className=" text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Workform;
