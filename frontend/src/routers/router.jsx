import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";

import About from "../components/About";
import Corporatesponsorship from "../components/Corporatesponsorship";
import Committee from "../components/Committee";

import Contactus from "../components/Contactus";
import SingleEvent from "../SingleEvent";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadEvents from "../dashboard/UploadEvents";
import ManageEvents from "../dashboard/ManageEvents";
import EditEvents from "../dashboard/EditEvents";
import Gallery from "../components/Gallery";

import PrivateRoute from "../PrivateRoute/PrivateRoute";

import Awards from "../components/Awards";
import Conferences from "../components/Conferences";
import Joinbiomedeng from "../components/Joinbiomedeng";
import Membership from "../components/Membership";
import Memberlogin from "../components/Memberlogin";
import Biomedeng from "../components/Biomedeng";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/corporatesponsorship", element: <Corporatesponsorship /> },
      { path: "/committee", element: <Committee /> },
      { path: "/conferences", element: <Conferences /> },
      { path: "/biomedeng", element: <Biomedeng /> },

      { path: "/contactus", element: <Contactus /> },

      { path: "/gallery", element: <Gallery /> },

      { path: "/awards", element: <Awards /> },
      { path: "/joinbiomedeng", element: <Joinbiomedeng /> },
      { path: "/membership", element: <Membership /> },
      { path: "/memberlogin", element: <Memberlogin /> },
      { path: "/corporatesponsorship", element: <Corporatesponsorship /> },
      { path: "/joinbiomedeng", element: <Joinbiomedeng /> },

      {
        path: "/events/:id",
        element: <SingleEvent />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/events/${params.id}`),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      { path: "upload", element: <UploadEvents /> },
      { path: "manage", element: <ManageEvents /> },
      {
        path: "edit-events/:id",
        element: <EditEvents />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/events/${params.id}`),
      },
    ],
  },
]);

export default router;
