import { SiGnubash } from "react-icons/si";

const navBarOptions = [
  {
    title: "home",
  },
  {
    title: "expertise",
  },
  {
    title: "work",
  },
  {
    title: "experience",
  },
  {
    title: "contact",
  },
];

const index = () => {
  return (
    <nav className="w-full flex justify-center items-center absolute">
      {/* Logo */}
      <div className="absolute top-8 left-8 flex justify-center items-center">
        <SiGnubash className="text-5xl" />
        <p className="glitch">
          <span aria-hidden="true">Rahul Kumar</span>
          Rahul Kumar
          <span aria-hidden="true">Rahul Kumar</span>
        </p>
      </div>
      {/* Navbar Options */}
      <ul className="w-full flex justify-center items-center">
        {navBarOptions.map((options, index) => (
          <li className="flex flex-col justify-center items-end mr-10 py-4 mt-4">
            <h4>0{index}</h4>
            <h1>// {options.title}</h1>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default index;
