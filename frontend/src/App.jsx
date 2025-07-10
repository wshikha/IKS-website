import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Myfooter from "./components/Myfooter";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });

    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Myfooter />
    </>
  );
};

export default App;
