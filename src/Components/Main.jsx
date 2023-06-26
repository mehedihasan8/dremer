import { Outlet } from "react-router-dom";
import NabBar from "./NabBar";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <NabBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
