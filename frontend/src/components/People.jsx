import React from "react";

const members = [
  {
    name: "Arnab Bhattacharya",
    dept: "Computer Science and Engineering",
    img: "team/arnab.jpeg",
  },
  {
    name: "Santosh Kumar Misra",
    dept: "Biological Sciences & Bioengineering",
    img: "team/skmisra.jpeg",
  },
  {
    name: "Sudhanshu Shekhar Singh",
    dept: "Materials Science and Engineering",
    img: "team/sudhanshu.jpeg",
  },
  {
    name: "Anurag Tripathi",
    dept: "Chemical Engineering",
    img: "team/anurag.jpeg",
  },
  {
    name: "Shikhar Krishn Jha",
    dept: "Materials Science and Engineering",
    img: "team/skjha.jpg",
  },
  {
    name: "Rajesh Ranjan",
    dept: "Department of Aerospace Engineering",
    img: "team/Rajeshr.jpg",
  },
  {
    name: "Sudarshan Narayanan",
    dept: "Sustainable Energy Engineering",
    img: "team/sudarshan.jpeg",
  },
  {
    name: "Lalit Saraswat",
    dept: "Humanities and Social Sciences",
    img: "team/lalit.jpeg",
  },
  {
    name: "Shivam Tripathi",
    dept: "Civil Engineering",
    img: "team/shivam.jpg",
  },
  {
    name: "K. R. Guruprasad",
    dept: "Mechanical Engineering",
    img: "team/kr2.jpg",
  },
  {
    name: "Kunal Mooley",
    dept: "SPASE",
    img: "team/kunal.jpeg",
  },
];

const People = () => {
  return (
    <div className="px-4 py-16 font-serif bg-amber-50 md:px-10 lg:px-24">
      <div className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="inline-block pb-2 mb-10 text-3xl font-bold border-b-2 md:text-4xl text-amber-800 border-amber-800">
          Members of ŚIKṢĀ
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden transition duration-300 ease-in bg-white border shadow border-amber-200 rounded-xl hover:shadow-md"
          >
            <div className="w-full h-80 md:h-96">
              <img
                src={member.img}
                alt={member.name}
                className="object-cover object-top w-full h-full"
              />
            </div>
            <div className="px-4 py-4 text-center">
              <h3 className="text-base font-medium text-amber-700 md:text-lg">
                {member.dept}
              </h3>
              <h1 className="mt-1 text-xl font-semibold text-gray-900 md:text-2xl">
                Prof. {member.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
