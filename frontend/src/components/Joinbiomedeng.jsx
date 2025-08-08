import React from "react";

const Joinbiomedeng = () => {
  return (
    <div className="max-w-4xl p-6 mx-auto space-y-6">
      <h1 className="text-4xl font-bold text-[#11747C]">Join BioMedEng</h1>

      <p className="text-lg text-gray-700">
        <span className="font-semibold text-red-600">*</span> ID is required for
        student rates –{" "}
        <em className="text-red-600">
          You need to send a copy of your current student ID and any additional
          documentation that confirms your type of student status (UG, MSc, MRes
          or PhD) to{" "}
          <a
            href="mailto:membership@biomedeng.org"
            className="underline text-[#11747C]"
          >
            membership@biomedeng.org
          </a>{" "}
          after you submit your application form.
        </em>
      </p>

      <p className="text-xl text-gray-700">
        After your membership has been approved, you will receive an email from{" "}
        <a
          href="mailto:info@biomedeng.org"
          className="text-[#11747C] font-semibold underline"
        >
          info@biomedeng.org
        </a>{" "}
        with your login details for accessing the members area and completing
        your registration by paying your dues. Do{" "}
        <span className="font-semibold">check your junk folder</span> as well.
      </p>

      <h2 className="text-2xl font-bold text-[#11747C]">
        New member registration form:
      </h2>

      <form className="space-y-4">
        <div>
          <label className="block mb-1 text-lg font-medium">Title:</label>
          <input
            type="text"
            placeholder="Prof. Dr. etc."
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 text-lg font-medium">First Name*:</label>
          <input
            type="text"
            placeholder="Your first name."
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 text-lg font-medium">
            Second Name*:
          </label>
          <input
            type="text"
            placeholder="Your second name."
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 text-lg font-medium">
            Membership options*:
          </label>
          <select className="w-full p-2 border rounded-md">
            <option value="">SELECT</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div>
          <label className="block mb-1 text-lg font-medium">
            Name of supervisor or line manager (* PhD and MRes student
            memberships only):
          </label>
          <input
            type="text"
            placeholder="Supervisor"
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 text-lg font-medium">
            Affiliation*:
          </label>
          <input
            type="text"
            placeholder="The institute or company where you work or study."
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 text-lg font-medium">
            Department, division or school*:
          </label>
          <input
            type="text"
            placeholder="Department, division or school."
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 text-lg font-medium">
            Work or Study Address*:
          </label>
          <input
            type="text"
            placeholder="Departmental address."
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 text-lg font-medium">
            Your work email address*:
          </label>
          <input
            type="email"
            placeholder="Your work or study email address."
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-[#11747C] text-white px-6 py-2 rounded-md hover:bg-[#0e5d61] transition font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Joinbiomedeng;
