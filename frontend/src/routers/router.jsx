import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Library from "../library/Library";
import About from "../components/About";
import Activity from "../components/Activity";
import People from "../components/People";
import Project from "../components/Project";
import Contactus from "../components/Contactus";
import SingleEvent from "../SingleEvent";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadEvents from "../dashboard/UploadEvents";
import ManageEvents from "../dashboard/ManageEvents";
import EditEvents from "../dashboard/EditEvents";

import Gallery from "../components/Gallery";
import SubjectList from "../library/SubjectList";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Ayurveda from "../individualproject/Ayurveda";
import Niti from "../individualproject/Niti";
import Darsana from "../individualproject/Darsana";
import Ganita from "../individualproject/Ganita";
import Kala from "../individualproject/Kala";
import Newprojects from "../home/Newprojects";
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
        path: "/activity",
        element: <Activity />,
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
        path: "subject-list",
        element: <SubjectList />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
      {
        path: "/newprojects",
        element: <Newprojects />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/project/ayurveda",
        element: <Ayurveda />,
      },
      {
        path: "/project/niti",
        element: <Niti />,
      },
      {
        path: "/project/darsana",
        element: <Darsana />,
      },
      {
        path: "/project/ganita",
        element: <Ganita />,
      },
      {
        path: "/project/kala",
        element: <Kala />,
      },

      {
        path: "/events/:id",
        element: <SingleEvent />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/events/${params.id}`),
      },

      {
        path: "/admin/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/admin/dashboard",
            element: (
              <PrivateRoute>
                <Dashboard />,
              </PrivateRoute>
            ),
          },
          {
            path: "/admin/dashboard/upload",
            element: <UploadEvents />,
          },
          {
            path: "/admin/dashboard/manage",
            element: <ManageEvents />,
          },
          {
            path: "/admin/dashboard/manage",
            element: <ManageEvents />,
          },
          {
            path: "/admin/dashboard/edit-events/:id",
            element: <EditEvents />,
            loader: ({ params }) => fetch("/events/${params.id}"),
          },
        ],
      },
    ],
  },

  {
    path: "login",
    element: <Login />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
]);

export default router;
