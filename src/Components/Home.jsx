import { useLoaderData } from "react-router-dom";
import Engineer from "./Engineer";
import Hero from "./Hero";
import Jobs from "./Jobs";
import { useEffect, useState } from "react";

const Home = () => {
  const engineers = useLoaderData();
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);

  return (
    <>
      <Hero />
      <Jobs categorys={categorys} />
      <Engineer engineers={engineers} />
    </>
  );
};

export default Home;
