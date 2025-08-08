import React from "react";

const Contactus = () => {
  return (
    <div className="min-h-screen px-4 py-10 bg-white md:px-20 lg:px-40">
      <div className="max-w-3xl mx-auto space-y-10">
        <h1 className="text-5xl font-bold text-[#11747C]">Contact</h1>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-700 font-xl">
              Who do you wish to contact?
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11747C]">
              <option>Website enquiries</option>
              <option>Membership</option>
              <option>Technical support</option>
            </select>
          </div>

          <div className="text-xl">
            <label className="block mb-1 text-lg italic text-gray-900">
              Your name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11747C]"
            />
          </div>

          <div>
            <label className="block mb-1 text-xl italic text-gray-900">
              Your Email (not disclosed)
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11747C]"
            />
          </div>

          <div>
            <label className="block mb-1 text-xl text-gray-900">
              Message subject
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11747C]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-900">Message</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11747C]"
              placeholder="IMPORTANT - messages containing links will be treated as spam and discarded without being sent!"
            />
          </div>

          <button
            type="submit"
            className="bg-[#11747C] text-white font-bold px-6 py-2 rounded hover:bg-[#0d5e67] uppercase"
          >
            Send Message!
          </button>
        </form>

        <div className="pt-10 border-t border-gray-300">
          <h2 className="text-3xl font-bold text-[#11747C] mb-3">
            Postal address
          </h2>
          <p className="font-mono text-xl leading-6 whitespace-pre-line">
            The BioMedEng Association{"\n"}
            Department of Bioengineering{"\n"}
            Imperial College London{"\n"}
            Bessemer Building{"\n"}
            London{"\n"}
            UK{"\n"}
            SW7 2AZ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
