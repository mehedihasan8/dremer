import { useState } from "react";
import EngineerCard from "./EngineerCard";

const Engineer = ({ engineer }) => {
  const [search, setSearch] = useState("");
  console.log(search);
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
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by engineer name or job title"
          className="input  border-2 border-[#c084fc]  md:w-[600px]"
        />
        <button className="btn2 mt-1 ">Find Engineer</button>
      </div>
      <div className="grid lg:grid-cols-3 gap-6  px-4">
        {/* {engineer
          .filter((enginee) => {
            return search.toLowerCase() === ""
              ? enginee
              : enginee.name.toLowerCase().includes(search) &&
                  enginee.job_title.toLowerCase().includes(search);
          })
          .map((enginee) => (
            <EngineerCard key={enginee.id} enginee={enginee}></EngineerCard>
          ))} */}
        {engineer
          .filter((enginee) => {
            const lowercaseSearch = search.toLowerCase();
            return (
              lowercaseSearch === "" ||
              enginee.name.toLowerCase().includes(lowercaseSearch) ||
              enginee.job_title.toLowerCase().includes(lowercaseSearch)
            );
          })
          .map((enginee) => (
            <EngineerCard key={enginee.id} enginee={enginee} />
          ))}
      </div>
    </div>
  );
};

export default Engineer;
