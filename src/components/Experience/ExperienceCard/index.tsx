import { useState } from "react";
import { FiPlus } from "react-icons/fi";

type ExperienceT = {
  id: number;
  company: string;
  companyLogo: string;
  companyLink: string;
  position: string;
  dateFrom: string;
  dateTo: string;
  location: string;
  jobDescription: string;
  techStack: string[];
};

type Props = {
  experience: ExperienceT;
};

const index: React.FC<Props> = ({ experience }) => {
  const [openModal, setopenModal] = useState(false);

  const handleModal = () => {
    setopenModal((prev) => !prev);
  };
  return (
    <>
      <div
        className="w-full flex justify-between items-center border-b-2 border-white px-4 py-2"
        onClick={handleModal}
      >
        <div className="flex ml-4">
          <h2>{experience.position}</h2>
          <span>@</span>
          <h2>{experience.company}</h2>
        </div>
        <div className="flex justify-between items-center ">
          {experience.dateFrom}-{experience.dateTo}
          <FiPlus />
        </div>
      </div>
      {openModal && (
        <div className="bg-red-500 px-8 my-2 flex justify-between">
          <h1>cdlscnldm</h1>
          <h1>cdlscnldm</h1>
          <img src={experience.companyLogo} height={150} width={150} />
        </div>
      )}
    </>
  );
};

export default index;
