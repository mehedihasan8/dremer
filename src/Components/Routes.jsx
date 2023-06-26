import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "./Home";

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
    ],
  },
]);

export default router;
