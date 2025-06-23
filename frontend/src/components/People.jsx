import React from "react";
import arnab from "../assets/team/arnab.jpg";
import sk from "../assets/team/skmisra.jpg";
import sd from "../assets/team/sudhanshu.jpeg";
import skjha from "../assets/team/skjha.jpg";
import anurag from "../assets/team/anurag.jpg";
import Favimg from "../assets/favimg.jpg";
import Rajeshr from "../assets/team/Rajeshr.jpg";
import Sudarshan from "../assets/team/sudarshan.jpeg";
import lalit from "../assets/team/lalit.jpeg";
import shivam from "../assets/team/shivam.jpg";
import kr from "../assets/team/kr.jpg";
import kunal from "../assets/team/kunal.jpg";
const People = () => {
  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <div className="container px-5 py-24 mx-auto">
          <div className="mb-12 font-serif text-center">
            <h1 className="p-2 text-2xl font-semibold bg-gradient-to-l from-orange-300 via-orange-50 to-orange-200 lg:px-24 md:text-4xl">
              Members of ŚIKṢĀ
            </h1>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-4 s:w-1/2 lg:w-1/4">
              <div className="overflow-hidden border-2 border-gray-200 rounded-lg h-96 border-opacity-60">
                <div className="profile-image">
                  <img
                    src={arnab}
                    alt=""
                    className="object-cover object-center w-full pb-0 p-9 lg:h-72 md:h-48"
                  />
                </div>
                <div className="p-2 m-8 mt-1 transition duration-300 ease-in hover:bg-indigo-700 hover:text-white">
                  <h2 className="mb-1 text-base font-medium text-indigo-800 hover:text-white">
                    {" "}
                    Computer Science and Engineering
                  </h2>
                  <h1 className="mb-3 font-semibold text-1xl">
                    Arnab Bhattacharya
                  </h1>
                </div>
              </div>
            </div>
            <div className="p-4 s:w-1/2 lg:w-1/4">
              <div className="overflow-hidden border-2 border-gray-200 rounded-lg h-96 border-opacity-60">
                <div className="profile-image">
                  <img
                    src={sk}
                    alt=""
                    className="object-cover object-top w-full pb-0 p-9 lg:h-72 md:h-48"
                  />
                </div>
                <div className="p-2 m-8 mt-1 transition duration-300 ease-in m-7 hover:bg-indigo-700 hover:text-white">
                  <h2 className="mb-1 text-base font-medium text-indigo-800 hover:text-white">
                    {" "}
                    Biological Sciences & Bioengineering
                  </h2>
                  <h1 className="mb-3 font-semibold text-1xl">
                    Santosh Kumar Misra
                  </h1>
                </div>
              </div>
            </div>
            <div className="p-4 s:w-1/2 lg:w-1/4">
              <div className="overflow-hidden border-2 border-gray-200 rounded-lg h-96 border-opacity-60">
                <div className="profile-image">
                  <img
                    src={sd}
                    alt=""
                    className="object-cover object-top w-full pb-0 p-9 lg:h-72 md:h-48"
                  />
                </div>
                <div className="p-2 m-8 mt-1 transition duration-300 ease-in hover:bg-indigo-700 hover:text-white">
                  <h2 className="mb-1 text-base font-medium text-indigo-800 hover:text-white">
                    {" "}
                    Materials Science and Engineering
                  </h2>
                  <h1 className="mb-3 font-semibold text-1xl">
                    Sudhanshu Shekhar Singh
                  </h1>
                </div>
              </div>
            </div>
            <div className="p-4 s:w-1/2 lg:w-1/4">
              <div className="overflow-hidden border-2 border-gray-200 rounded-lg h-96 border-opacity-60">
                <div className="profile-image">
                  <img
                    src={anurag}
                    alt=""
                    className="object-cover object-top w-full pb-0 p-9 lg:h-72 md:h-48"
                  />
                </div>
                <div className="p-2 m-8 mt-1 transition duration-300 ease-in hover:bg-indigo-700 hover:text-white">
                  <h2 className="mb-1 text-base font-medium text-indigo-800 hover:text-white">
                    {" "}
                    Chemical Engineering
                  </h2>
                  <h1 className="mb-3 font-semibold text-1xl">
                    Anurag Tripathi
                  </h1>
                </div>
              </div>
            </div>{" "}
            <div className="p-4 s:w-1/2 lg:w-1/4">
              <div className="overflow-hidden border-2 border-gray-200 rounded-lg h-96 border-opacity-60">
                <div className="profile-image">
                  <img
                    src={skjha}
                    alt=""
                    className="object-cover object-center w-full pb-0 p-9 lg:h-72 md:h-48"
                  />
                </div>
                <div className="p-2 m-8 mt-1 transition duration-300 ease-in hover:bg-indigo-700 hover:text-white">
                  <h2 className="mb-1 text-base font-medium text-indigo-800 hover:text-white">
                    {" "}
                    Materials Science and Engineering
                  </h2>
                  <h1 className="mb-3 font-semibold text-1xl">
                    Shikhar Krishn Jha
                  </h1>
                </div>
              </div>
            </div>{" "}
            <div className="p-4 s:w-1/2 lg:w-1/4">
              <div className="overflow-hidden border-2 border-gray-200 rounded-lg h-96 border-opacity-60">
                <div className="profile-image">
                  <img
                    src={Rajeshr}
                    alt=""
                    className="object-cover object-center w-full pb-0 p-9 lg:h-72 md:h-48"
                  />
                </div>
                <div className="p-2 m-8 mt-1 transition duration-300 ease-in hover:bg-indigo-700 hover:text-white">
                  <h2 className="mb-1 text-base font-medium text-indigo-800 hover:text-white">
                    {" "}
                    Department of Aerospace Engineering
                  </h2>
                  <h1 className="mb-3 font-semibold text-1xl">Rajesh Ranjan</h1>
                </div>
              </div>
            </div>{" "}
            <div className="p-4 s:w-1/2 lg:w-1/4">
              <div className="overflow-hidden border-2 border-gray-200 rounded-lg h-96 border-opacity-60">
                <div className="profile-image">
                  <img
                    src={Sudarshan}
                    alt=""
                    className="object-cover object-center w-full pb-0 p-9 lg:h-72 md:h-48"
                  />
                </div>
                <div className="p-2 m-8 mt-1 transition duration-300 ease-in hover:bg-indigo-700 hover:text-white">
                  <h2 className="mb-1 text-base font-medium text-indigo-800 hover:text-white">
                    {" "}
                    Sustainable Energy Engineering
                  </h2>
                  <h1 className="mb-3 font-semibold text-1xl">
                    Sudarshan Narayanan
                  </h1>
                </div>
              </div>
            </div>{" "}
            <div className="p-4 s:w-1/2 lg:w-1/4">
              <div className="overflow-hidden border-2 border-gray-200 rounded-lg h-96 border-opacity-60">
                <div className="profile-image">
                  <img
                    src={lalit}
                    alt=""
                    className="object-cover object-top w-full pb-0 p-9 lg:h-72 md:h-48"
                  />
                </div>
                <div className="p-2 m-8 mt-1 transition duration-300 ease-in hover:bg-indigo-700 hover:text-white">
                  <h2 className="mb-1 text-base font-medium text-indigo-800 hover:text-white">
                    {" "}
                    Humanities and Social Sciences
                  </h2>
                  <h1 className="mb-3 font-semibold text-1xl">
                    Lalit Saraswat
                  </h1>
                </div>
              </div>
            </div>{" "}
            <div className="p-4 s:w-1/2 lg:w-1/4">
              <div className="overflow-hidden border-2 border-gray-200 rounded-lg h-96 border-opacity-60">
                <div className="profile-image">
                  <img
                    src={shivam}
                    alt=""
                    className="object-cover object-top w-full pb-0 p-9 lg:h-72 md:h-48"
                  />
                </div>
                <div className="p-2 m-8 mt-1 transition duration-300 ease-in hover:bg-indigo-700 hover:text-white">
                  <h2 className="mb-1 text-base font-medium text-indigo-800 hover:text-white">
                    {" "}
                    Civil Engineering
                  </h2>
                  <h1 className="mb-3 font-semibold text-1xl">
                    Shivam Tripathi
                  </h1>
                </div>
              </div>
            </div>{" "}
            <div className="p-4 s:w-1/2 lg:w-1/4">
              <div className="overflow-hidden border-2 border-gray-200 rounded-lg h-96 border-opacity-60">
                <div className="profile-image">
                  <img
                    src={kr}
                    alt=""
                    className="object-cover object-top w-full pb-0 p-9 lg:h-72 md:h-48"
                  />
                </div>
                <div className="p-2 m-8 mt-1 transition duration-300 ease-in hover:bg-indigo-700 hover:text-white">
                  <h2 className="mb-1 text-base font-medium text-indigo-800 hover:text-white">
                    {" "}
                    Mechanical Engineering
                  </h2>
                  <h1 className="mb-3 font-semibold text-1xl">
                    K. R. Guruprasad
                  </h1>
                </div>
              </div>
            </div>{" "}
            <div className="p-4 s:w-1/2 lg:w-1/4">
              <div className="overflow-hidden border-2 border-gray-200 rounded-lg h-96 border-opacity-60">
                <div className="profile-image">
                  <img
                    src={kunal}
                    alt=""
                    className="object-cover object-top w-full pb-0 p-9 lg:h-72 md:h-48"
                  />
                </div>
                <div className="p-2 m-8 mt-1 transition duration-300 ease-in hover:bg-indigo-700 hover:text-white">
                  <h2 className="mb-1 text-base font-medium text-indigo-800 hover:text-white">
                    {" "}
                    SPACE
                  </h2>
                  <h1 className="mb-3 font-semibold text-1xl">Kunal Mooley</h1>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
