import Card from "./ExperienceCard";

const workExperience = [
  {
    id: 1,
    company: "Mogi/Io",
    companyLogo: "src/assets/mogiIo.webp",
    position: "SDE",
    dateFrom: "October/23",
    dateTo: "Present",
    location: "Delhi",
    jobDescription: "",
    techStack: [],
  },
  {
    id: 2,
    company: "Codebook.INC",
    companyLogo: "src/assets/codebook.png",
    companyLink: "https://www.thecodebookinc.com/",
    position: "Full Stack Developer",
    dateFrom: "April/23",
    dateTo: "October/23",
    location: "Remote, Lucknow",
    jobDescription: "",
    techStack: [],
  },
];

const index = () => {
  return (
    <section className="w-full h-auto bg-darkBg flex flex-col justify-start items-center py-20">
      <h1>"Code is like humor.when you have to explain it,its bad."</h1>
      {/* Header */}
      <div className=" w-full max-w-[1080px] my-20">
        <span>{`<h1>`}</span>
        <h1 className="text-[5rem] font-bold">My Experince</h1>
        <span>{`<h1/>`}</span>
      </div>
      {/* Experience */}
      <div className="w-full max-w-[1080px]">
        {workExperience.map((experience) => (
          <Card key={experience.id} experience={experience} />
        ))}
      </div>
      {/* Resume Download */}
      <div className="w-full h-28 bg-white mt-20">
        <h1>RESUME</h1>
      </div>
    </section>
  );
};

export default index;
