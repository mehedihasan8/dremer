import JobsCard from "./JobsCard";

const Jobs = ({ categorys }) => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-20 mb-2 font-mono">
        Job Category List
      </h1>
      <p className="px-10 text-center text-xl mt-4 mb-12">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="my-container grid md:grid-cols-2 gap-4 lg:grid-cols-4 px-4">
        {categorys.map((category) => (
          <JobsCard key={category.id} category={category}></JobsCard>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
