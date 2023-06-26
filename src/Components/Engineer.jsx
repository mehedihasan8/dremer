import EngineerCard from "./EngineerCard";

const Engineer = ({ engineer }) => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-20 mb-2 font-mono">
        Featured Jobs
      </h1>
      <p className="px-10 text-center text-xl mt-4 ">
        Explore thousands of job opportunities with all the information you1234-
        need. Its your future
      </p>
      <div className="flex items-center justify-center gap-2 mt-10 mb-12">
        {/* <div className="flex flex-col">
          <label htmlFor="">
            <span className="text-lg font-semibold mb-4">
              Engineer name or job title
            </span>
          </label>
        </div> */}
        <input
          type="text"
          placeholder="Search by engineer name or job title"
          className="input  border-2 border-[#c084fc]  md:w-[600px]"
        />
        <button className="btn2 mt-1 ">Find Engineer</button>
      </div>
      <div className="grid lg:grid-cols-3 gap-6  px-4">
        {engineer.map((enginee) => (
          <EngineerCard key={enginee.id} enginee={enginee}></EngineerCard>
        ))}
      </div>
    </div>
  );
};

export default Engineer;
