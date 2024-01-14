import { FaAngleDown, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const index = () => {
  return (
    <div className="w-full h-[100vh] bg-darkBg">
      {/* Main Container */}
      <div className="w-full h-full flex justify-center items-center flex-col">
        <h1 className="text-[12rem]">Rahul Kumar</h1>
        <h3 className="text-2xl">
          Software Engineer, Full Stack & App Developer.
        </h3>
      </div>
      {/* Drop Arrow */}
      <span className="absolute bottom-12 w-full flex justify-center items-center text-5xl animate-bounce">
        <FaAngleDown />
      </span>
      {/* Right Option */}
      <div className="absolute bottom-12 right-16 flex flex-col justify-between items-center h-60 text-2xl">
        <span className="rotate-90 py-6">Resume</span>
        <FaLinkedinIn />
        <FiGithub />
      </div>
    </div>
  );
};

export default index;
