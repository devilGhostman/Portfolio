const index = () => {
  return (
    <section className="w-full h-[100vh] bg-darkBg flex flex-col justify-start items-center pt-20">
      <h1>"Code is like humor.when you have to explain it,its bad."</h1>
      {/* Header */}
      <div className=" w-full max-w-[1080px] my-20">
        <span>{`<h1>`}</span>
        <h1 className="text-[5rem] font-bold">My Experince</h1>
        <span>{`<h1/>`}</span>
      </div>

      {/* Container */}
      <div className="relative overflow-hidden w-full h-full">
        <div className="grained bg-[url('src/assets/noise.png')]"/>
      </div>
    </section>
  );
};

export default index;
