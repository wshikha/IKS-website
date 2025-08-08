import React from "react";

const people = [
  {
    name: "Anthony Bull",
    title: "Chair/Trustee",
    org: "Imperial",
    img: "/img1.jpg",
  },
  {
    name: "Vanessa Díaz",
    title: "Trustee",
    org: "UCL",
    img: "/img2.jpg",
  },
  {
    name: "Alicia El Haj",
    title: "Trustee",
    org: "Birmingham",
    img: "/img1.jpg",
  },
  {
    name: "Hazel Screen",
    title: "Treasurer/Trustee",
    org: "QMUL",
    img: "/img1.jpg",
  },
  {
    name: "Gifty Tetteh",
    title: "Head of Operations",
    org: "Imperial",
    img: "/img1.jpg",
  },
  {
    name: "Martin Knight",
    title: "Chair of Council",
    org: "QMUL",
    img: "/img1.jpg",
  },
  {
    name: "Anita Ghag",
    title: "Education WG Chair",
    org: "Birmingham",
    img: "/img1.jpg",
  },
  {
    name: "Gwen Reilly",
    title: "ECD WG Chair",
    org: "Sheffield",
    img: "/img1.jpg",
  },
  {
    name: "Silvia Del Din",
    title: "ECR WG Chair",
    org: "Newcastle",
    img: "/img1.jpg",
  },
];

const Committee = () => {
  return (
    <div className="px-4 py-16 font-sans bg-white md:px-10 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="inline-block pb-2 mb-10 text-4xl font-bold text-[#11747C] border-b-4 border-[#11747C]">
          Committee
        </h2>
      </div>

      <div className="grid max-w-6xl grid-cols-1 gap-10 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {people.map((person, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden bg-white rounded-xl border border-[#11747C] shadow hover:shadow-md transition duration-300 ease-in"
          >
            <div className="w-full h-56">
              <img
                src={person.img}
                alt={person.name}
                className="object-cover object-top w-full h-full"
              />
            </div>
            <div className="px-3 py-4 text-white text-sm bg-[#11747C] text-center">
              <h4 className="text-base font-semibold">Prof {person.name}</h4>
              <p className="text-sm">
                {person.org} – {person.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committee;
