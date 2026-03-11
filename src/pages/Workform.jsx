import { MdManageAccounts } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoProjectSymlink } from "react-icons/go";
import { FaHandshake } from "react-icons/fa";
function Workform() {
  return (
    <div className=" h-[100vh] text-center text-white mt-[20vh]">
      <h1 className="text-5xl mb-[10vh]">How DevConnect Works</h1>
      <div className="flex justify-center gap-6 ">
        <div className="border-2 rounded-2xl h-[150px] w-[250px] flex flex-col items-center mb-2">
          <MdManageAccounts size={40} className="mt-2 mb-2" />
          <h1>create account</h1>
        </div>
        <div className="border-2 rounded-2xl h-[150px] w-[250px] flex flex-col items-center mb-2">
          <CgProfile size={40} className="mt-2 mb-2" />

          <h1>Build Profile</h1>
        </div>
      </div>
      <div className="flex justify-center gap-6">
        <div className="border-2 rounded-2xl h-[150px] w-[250px] flex flex-col items-center mb-2" >
          <GoProjectSymlink size={40} className="mt-2 mb-2" />

          <h1>Share Projects</h1>
        </div>
        <div className="border-2 rounded-2xl h-[150px] w-[250px] flex flex-col items-center  mb-2">
          <FaHandshake size={40} className="mt-2 mb-2" />
          <h1>Connect Developers</h1>
        </div>
      </div>
    </div>
  );
}

export default Workform;
