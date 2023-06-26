import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "./Home";
import TopEngineer from "./TopEngineer";
import Login from "./Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => await fetch("/user.json"),
      },
      {
        path: "/topengineer",
        element: <TopEngineer />,
        loader: async () => await fetch("/user.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
