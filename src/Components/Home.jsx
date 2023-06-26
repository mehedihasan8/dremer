import { useLoaderData } from "react-router-dom";
import Engineer from "./Engineer";
import Hero from "./Hero";
import Jobs from "./Jobs";
import { useEffect, useState } from "react";

const Home = () => {
  const engineers = useLoaderData();

  const [categorys, setCategorys] = useState([]);
  const [engineer, setEngineer] = useState([]);
  const [btnShow, setBtnShow] = useState(false);

  useEffect(() => {
    const cutting = engineers.slice(0, 6);
    setEngineer(cutting);
    setBtnShow(true);
  }, [engineers]);

  const showAllData = () => {
    setEngineer(engineers);
    setBtnShow(false);
  };

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);

  return (
    <>
      <Hero />
      <Jobs categorys={categorys} />
      <Engineer engineer={engineer} />
      <div className="text-center my-8">
        <button onClick={showAllData} className={btnShow ? "btn2" : "hidden"}>
          See All Jobs
        </button>
      </div>
    </>
  );
};

export default Home;
