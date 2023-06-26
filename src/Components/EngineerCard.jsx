import { FaDollarSign, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

const EngineerCard = ({ engineer }) => {
  return (
    <div className="p-6  md:p-2 border-2 border-[#c084fc] rounded shadow-md text-center ">
      <img
        className="w-48 h-48 rounded-full mx-auto mt-2 bg-[#A855F7] p-1"
        src={engineer.image}
        alt="img"
      />
      <h1 className="font-semibold text-3xl pt-4">{engineer.name}</h1>

      <div className="flex justify-center gap-4">
        <p className=" pt-1 text-xl">{engineer.job_title}</p>
        <p className=" pt-1 text-xl">Exp : {engineer.experience} +</p>
      </div>
      {/* <div className="flex pt-4 gap-6">
        <p className="py-1.5 px-4 border rounded-sm text-xl font-semibold  border-blue-400 text-blue-500 ">
          {engineer.remoteOrOnsite}
        </p>
        <p className="py-1.5 px-4 border rounded-sm text-xl font-semibold  border-blue-400 text-blue-500 ">
          {engineer.fullOrHalfTime}
        </p>
      </div> */}
      <div className="flex pb-2 gap-12 py-2 justify-center">
        <p className="inline-flex">
          <FaMapMarkerAlt className="h-6 w-6 text-black" />
          {engineer.location}
        </p>
        <p className="inline-flex ">
          <FaDollarSign className="h-6 w-6 text-black" />
          <span>{engineer.salary}</span>
        </p>
      </div>
      <p className="flex items-center justify-center gap-2">
        {" "}
        <FaGraduationCap className="text-2xl" />
        {engineer.education}
      </p>
      <div className="my-4">
        <button className=" border border-[#c084fc] hover:border-2 rounded-sm px-3 py-1 font-semibold ">
          Message
        </button>
      </div>
    </div>
  );
};

export default EngineerCard;
