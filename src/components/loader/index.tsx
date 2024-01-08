const animation = [
  {
    type: "wipe2top",
    style: { animationDuration: "2s" },
  },
  {
    type: "wipe2down",
    style: { animationDuration: "1.5s" },
  },
  {
    type: "wipe2top",
    style: { animationDuration: "1s" },
  },
  {
    type: "wipe2down",
    style: { animationDuration: "1.5s" },
  },
  {
    type: "wipe2top",
    style: { animationDuration: "2s" },
  },
];

const index = () => {
  return (
    <>
      {false ? (
        <section className="w-full h-[100vh] absolute top-0 left-0 flex ">
          {animation.map((item, index) => (
            <div
              className={`w-1/5 h-full bg-gray-500 ${item.type}`}
              style={item.style}
              key={index}
            />
          ))}
        </section>
      ) : (
        <section className="w-full h-[100vh] absolute top-0 left-0 flex ">
          {animation.map((item, index) => (
            <div
              className={`w-1/5 h-full bg-gray-500 ${item.type}`}
              style={{ ...item.style, animationDirection: "reverse" }}
              key={index}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default index;
