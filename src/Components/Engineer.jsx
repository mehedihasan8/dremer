import EngineerCard from "./EngineerCard";

const Engineer = ({ engineers }) => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-3 mb-2 font-mono">
        Featured Jobs
      </h1>
      <p className="px-10 text-center text-xl my-2">
        Explore thousands of job opportunities with all the information you1234-
        need. Its your future
      </p>
      <div className="grid lg:grid-cols-3 gap-6  px-4">
        {engineers.map((engineer) => (
          <EngineerCard key={engineer.id} engineer={engineer}></EngineerCard>
        ))}
      </div>
    </div>
  );
};

export default Engineer;
