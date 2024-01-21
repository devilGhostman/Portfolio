const ProjectsData = [
  [
    {
      id: 1,
      title: "name",
      type: "type",
      projectimg:
        "https://tamalsen.dev/wp-content/uploads/2021/10/ahigherthought.com-poster.jpg",
    },
    {
      id: 2,
      title: "name",
      type: "type",
      projectimg:
        "https://tamalsen.dev/wp-content/uploads/2021/03/all-the-roads-of-chittagong-1920x2748.jpg",
    },
  ],
  [
    {
      id: 3,
      title: "name",
      type: "type",
      projectimg:
        "https://tamalsen.dev/wp-content/uploads/2021/10/ahigherthought.com-poster.jpg",
    },
    {
      id: 4,
      title: "name",
      type: "type",
      projectimg:
        "https://tamalsen.dev/wp-content/uploads/2021/10/ahigherthought.com-poster.jpg",
    },
  ],
  [
    {
      id: 5,
      title: "name",
      type: "type",
      projectimg:
        "https://tamalsen.dev/wp-content/uploads/2021/03/all-the-roads-of-chittagong-1920x2748.jpg",
    },
    {
      id: 6,
      title: "name",
      type: "type",
      projectimg:
        "https://tamalsen.dev/wp-content/uploads/2021/03/all-the-roads-of-chittagong-1920x2748.jpg",
    },
    {
      id: 7,
      title: "name",
      type: "type",
      projectimg:
        "https://tamalsen.dev/wp-content/uploads/2021/03/all-the-roads-of-chittagong-1920x2748.jpg",
    },
  ],
];

const index = () => {
  const flexPosition = (index: number) => {
    let flexStyle = "";
    if (index == 1 || index == 4) {
      flexStyle = `w-2/3`;
    } else if (index == 2 || index == 3) {
      flexStyle = `w-1/3`;
    } else {
      flexStyle = `w-1/3`;
    }
    return flexStyle;
  };

  return (
    <section className="w-full h-auto bg-darkBg flex flex-col justify-start items-center py-10">
      {/* Header */}
      <div className=" w-full max-w-[1080px] my-20">
        <span>{`<h1>`}</span>
        <h1 className="text-[5rem] font-bold">My Work</h1>
        <span>{`<h1/>`}</span>
      </div>
      {/* Project */}
      <div className=" w-full max-w-[1080px] flex flex-wrap gap-5 ">
        {ProjectsData.map((projects, index) => (
          <div key={index} className="w-full flex gap-5">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`border-2 border-white ` + flexPosition(project.id)}
              >
                <h1>{project.title}</h1>
                <h2>{project.id}</h2>
                <img
                  src={project.projectimg}
                  // sizes="50"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default index;
