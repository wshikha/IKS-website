import React from "react";

const Membership = () => {
  return (
    <div className="max-w-6xl px-4 py-12 mx-auto text-justify">
      <h2 className="mb-4 text-2xl font-bold md:text-3xl text-primary">
        Membership of the BioMedEng Association
      </h2>
      <p className="mb-8 text-base leading-relaxed">
        Membership is open to practising engineers, clinicians, students and
        anyone who is interested in Biomedical Engineering, Medical Engineering
        and Bioengineering. We welcome UK and International members from
        Industry, Academic Institutions and Research Centres, Clinical
        Establishments and Hospitals, Governmental and Non-Governmental
        Organisations, amongst others. Membership brings with it a variety of
        benefits as part of belonging to a growing UK community of Biomedical
        Engineers, Medical Engineers and Bioengineers with links across the
        world.
      </p>

      <h3 className="mb-4 text-xl font-semibold text-primary">
        Members Benefits Summary
      </h3>
      <ul className="mb-10 space-y-2 text-base list-disc list-inside">
        <li>Reduced registration fees at the annual conference</li>
        <li>
          An opportunity to view or post research news, job vacancies and other
          important news to the community via the members-only section
        </li>
        <li>
          <a href="#" className="font-semibold text-blue-700 underline">
            Intellectual Property support
          </a>{" "}
          through our exclusive partnership with GJE
        </li>
        <li>The opportunity to apply for travel awards and bursaries</li>
        <li>Reduced delegate rates at partner events</li>
        <li>
          Attend webinars and training programmes hosted by the Association
        </li>
        <li>Receive Association updates via the newsletter</li>
        <li>Entitled to vote</li>
        <li>
          Entitled to stand for election to the Council (Full UK based members
          only)
        </li>
        <li>
          Entitled to bid to host future BioMedEng conferences (Full UK based
          members only)
        </li>
      </ul>

      <h3 className="mb-2 text-xl font-semibold text-primary">
        Membership Categories and Current Rates
      </h3>
      <p className="mb-4 text-base">
        We offer a range of membership categories to match your requirements:
      </p>
      <ul className="mb-6 space-y-2 text-base list-disc list-inside">
        <li>Full Members (Academic, Clinicians, Industry, PDRA) – £50/year</li>
        <li>
          UK based Postgraduate Research Student Members (PhD, MRes) – £20/year*
        </li>
        <li>Retired/Emeritus Members – £75/5 years</li>
        <li>UK based Student Members (MSc, UG) – Free*</li>
      </ul>
      <p className="mb-4 text-sm italic">
        * Student rates are subject to additional student verification checks of
        Student ID – Applicants need to send a copy of current student ID to{" "}
        <a
          href="mailto:membership@biomedeng.org"
          className="text-blue-500 underline"
        >
          membership@biomedeng.org
        </a>{" "}
        after submission of the application form.
      </p>
      <p className="mb-4 text-base">
        All yearly dues expire on 31st December of that year.
      </p>
      <p className="text-base font-semibold">
        To join, please complete the registration form here and pay your annual
        membership dues:{" "}
        <a href="#" className="text-blue-700 underline hover:text-blue-900">
          Click here to join
        </a>
      </p>
    </div>
  );
};

export default Membership;
