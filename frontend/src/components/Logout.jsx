import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.form?.pathname || "/";
  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Sign-out successful!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {});
  };
  return (
    <div className="flex items-center justify-center h-screen bg-amber-600">
      <button
        className="px-8 py-2 text-white bg-red-700 rounded"
        onClick={handleLogout}
      >
        {" "}
        Logout
      </button>
    </div>
  );
};

export default Logout;
