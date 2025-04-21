import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Library from "../library/Library";
import About from "../components/About";
import Events from "../components/Events";
import People from "../components/People";
import Project from "../components/Project";
import Contactus from "../components/Contactus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/people",
        element: <People />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
    ],
  },
]);

export default router;
