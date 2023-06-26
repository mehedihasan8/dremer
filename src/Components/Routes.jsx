import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Hero from "./Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
    ],
  },
]);

export default router;
