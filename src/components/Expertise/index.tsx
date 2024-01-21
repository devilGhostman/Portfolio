import { MdComputer } from "react-icons/md";
import { FaCode, FaMobileAlt } from "react-icons/fa";

const expertises = [
  {
    title: "Software",
    description:
      "Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.",
    icon: <FaCode />,
  },
  {
    title: "FullStack ",
    description:
      "Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.",
    icon: <MdComputer />,
  },
  {
    title: "Android ",
    description:
      "Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.",
    icon: <FaMobileAlt />,
  },
];

const techStack = [
  {
    name: "c++",
    imgPath: "src/assets/c++.svg",
  },
  {
    name: "html",
    imgPath: "src/assets/html.png",
  },
  {
    name: "css",
    imgPath: "src/assets/css.svg",
  },
  {
    name: "tailwindcss",
    imgPath: "src/assets/tailwindcss.svg",
  },
  {
    name: "js",
    imgPath: "src/assets/js.svg",
  },
  {
    name: "typescript",
    imgPath: "src/assets/typescript.svg",
  },
  {
    name: "react",
    imgPath: "src/assets/react.svg",
  },
  {
    name: "redux",
    imgPath: "src/assets/redux.png",
  },
  {
    name: "nextjs",
    imgPath: "src/assets/nextjs.svg",
  },
  {
    name: "angular",
    imgPath: "src/assets/angular.png",
  },
  {
    name: "nodejs",
    imgPath: "src/assets/nodejs.png",
  },
  {
    name: "express",
    imgPath: "src/assets/express.png",
  },
  {
    name: "graphql",
    imgPath: "src/assets/graphql.png",
  },
  {
    name: "mongodb",
    imgPath: "src/assets/mongo.png",
  },
  {
    name: "postgress",
    imgPath: "src/assets/postgres.png",
  },
  {
    name: "docker",
    imgPath: "src/assets/docker.png",
  },
];

const index = () => {
  return (
    <section className="expertises w-full h-auto bg-[#e7dddd] flex flex-col justify-start items-center">
      {/* Header */}
      <div className=" w-full max-w-[1080px] my-20">
        <span>{`<h1>`}</span>
        <h1 className="text-[5rem] font-bold">My Expertise</h1>
        <span>{`<h1/>`}</span>
      </div>
      {/* Details */}
      <div className="flex justify-center items-center flex-wrap max-w-[1080px]">
        {expertises.map((expertise, index) => (
          <div
            key={index}
            className="w-1/3 min-h-[280px] flex flex-col justify-between p-8 border-2 border-white border-solid"
          >
            <div className="flex justify-center items-center text-2xl gap-3 font-extrabold">
              <span className="text-4xl mr-4">{expertise.icon}</span>
              <h1>
                {expertise.title} <span>Development</span>
              </h1>
            </div>
            <div>
              {`<h3>`}
              <h3 className="flex justify-center items-center border-l-2 border-white ml-5 pl-5 my-2 text-lg">
                {expertise.description}
              </h3>
              {`</h3>`}
            </div>
          </div>
        ))}
      </div>
      {/* Tech Stack */}
      <div className="w-full max-w-[1080px] flex flex-wrap justify-center items-center mt-20">
        {techStack.map((tech, index) => (
          <img
            key={index}
            src={tech.imgPath}
            alt={tech.name}
            height={90}
            width={90}
            className="m-8 grayscale hover:grayscale-0 border-2 border-white p-4 rounded-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default index;
