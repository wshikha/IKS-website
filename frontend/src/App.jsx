import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Myfooter from "./components/Myfooter";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Myfooter />
    </>
  );
}

export default App;
