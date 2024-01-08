import { FaAngleDown, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const index = () => {
  return (
    <div className="w-full h-[100vh] bg-[#181a1b]">
      {/* Main Container */}
      <div className="w-full h-full flex justify-center items-center flex-col">
        <h1 className="text-[12rem] hover:text-[#66d9ed] text-red-300">
          Rahul Kumar
        </h1>
        <h3 className="text-2xl">
          Software Engineer, Full Stack & App Developer.
        </h3>
      </div>
      {/* Drop Arrow */}
      <span className="absolute bottom-12 w-full flex justify-center items-center text-5xl animate-bounce">
        <FaAngleDown />
      </span>
      {/* Right Option */}
      <div className="absolute bottom-12 right-16 flex flex-col justify-between items-center h-20 text-2xl">
        <FaLinkedinIn />
        <FiGithub />
      </div>
    </div>
  );
};

export default index;
