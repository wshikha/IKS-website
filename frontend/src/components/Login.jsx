import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from "../assets/google-logo.png";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const { login, loginwithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.form?.pathname || "/admin/dashboard/manage";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Login successful!!");
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  //signup using google account
  const handleRegister = () => {
    loginwithGoogle().then((result) => {
      const user = result.user;
      alert("Sign up successfully");
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <div className="flex flex-col justify-center min-h-screen py-6 bg-gray-100 sm:py-12 ">
        <div className="px-10 py-10 pz-10 sm:rounded-3xl sm:max-w-xl sm:mx-auto bg-amber-600">
          <div className="px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Login Form</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <form
                  onSubmit={handleLogin}
                  className="py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7"
                >
                  <div>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      className="w-full h-10 text-gray-900 border-b-2 border-gray-300 peer focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                  </div>
                  {error ? (
                    <p className="text-base text-red-600">
                      {" "}
                      Email or Password is not correct:
                    </p>
                  ) : (
                    ""
                  )}

                  <p>
                    {" "}
                    You haven't an account. Please{" "}
                    <Link to="/sign-up" className="text-blue-600 underline">
                      Sign up
                    </Link>
                    Here
                  </p>
                  <div>
                    <button class="bg-blue-500 text-white rounded-md px-6 py-2">
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <hr />

              <div className="flex flex-col items-center w-full gap-3 mt-5">
                <button onClick={handleLogin} className="block">
                  <img
                    src={googleLogo}
                    alt=""
                    className="inline-block w-12 h-12"
                  />{" "}
                  Login with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
