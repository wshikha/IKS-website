import React from "react";

const Memberlogin = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center bg-[#e6f8f9]">
      <div className="w-full max-w-md p-8 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-semibold text-[#11747C] mb-6">
          Member Login
        </h2>

        <div className="flex items-center justify-between mb-6">
          <button className="px-4 py-2 font-semibold text-white bg-black rounded text-md hover:opacity-90">
            LOST YOUR PASSWORD?
          </button>
          <button className="px-4 py-2 font-semibold text-white bg-black rounded text-md hover:opacity-90">
            LOGIN FORM
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-lg font-medium text-gray-700">
              Your email address:
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#11747C]"
            />
          </div>

          <div>
            <label className="block mb-1 text-lg font-medium text-gray-700">
              Your password:
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#11747C]"
            />
          </div>
        </div>

        <div className="mt-6 text-gray-700 text-md">
          <p className="font-semibold">Directive 2009/136/EC:</p>
          <p className="mt-1">
            To login you must allow this website (
            <a
              href="https://biomedeng.org"
              className="text-[#11747C] underline hover:text-[#0d5b61]"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://biomedeng.org
            </a>
            ) to store cookies on your computer. These cookies confirm your
            identity to the website after login.
            <span className="italic text-gray-600">
              {" "}
              These cookies are not used for any other purpose and are destroyed
              when you log out.
            </span>
          </p>
        </div>

        <button className="mt-6 bg-[#11747C] text-white px-6 py-2 rounded font-semibold hover:bg-[#0d5b61]">
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Memberlogin;
