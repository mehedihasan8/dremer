import { Outlet } from "react-router-dom";
import NabBar from "./NabBar";

const Main = () => {
  return (
    <div>
      <NabBar />
      <Outlet />
    </div>
  );
};

export default Main;
