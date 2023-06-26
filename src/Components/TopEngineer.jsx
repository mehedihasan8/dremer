import { useLoaderData } from "react-router-dom";
import TopEngineerCard from "./TopEngineerCard";

const TopEngineer = () => {
  const topEngineers = useLoaderData();
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-6  px-4">
        {topEngineers.map((enginee) => (
          <TopEngineerCard key={enginee.id} enginee={enginee}></TopEngineerCard>
        ))}
      </div>
    </>
  );
};

export default TopEngineer;
