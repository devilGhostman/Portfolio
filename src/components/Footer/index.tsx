import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";

const connect = [
  {
    title: "Linkdin",
    link: "",
    icon: <FaLinkedinIn />,
  },
  {
    title: "Github",
    link: "",
    icon: <FiGithub />,
  },
  {
    title: "Mail",
    link: "",
    icon: <BiLogoGmail />,
  },
];

const index = () => {
  return (
    <section className="w-full h-auto bg-darkBg flex justify-center items-center ">
      <div className=" w-full max-w-[1080px] flex justify-between items-start">
        <div className="w-2/3">
          <span>{`<h1>`}</span>
          <h1 className="text-[5rem] font-bold">Let's Work Together</h1>
          <span>{`<h1/>`}</span>
        </div>
        {/* Connect */}
        <div className="w-1/3 pt-10">
          <div className="w-full flex justify-end items-center">
            <h1 className="text-[2rem] font-bold">Connect with me</h1>
          </div>
          {connect.map((item, index) => (
            <div
              key={index}
              className="flex justify-end items-center text-2xl my-2"
            >
              <span>//</span>
              <span className="mx-2">{item.icon}</span>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
