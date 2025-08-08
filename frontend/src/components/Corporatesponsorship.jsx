import React from "react";

function CorporateSponsorship() {
  return (
    <div className="px-4 py-12 text-gray-800 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-4xl font-bold text-[#11747C] mb-4">
          Corporate Sponsorship
        </h2>
        <h3 className="mb-6 text-3xl font-semibold">
          Benefits of sponsoring the BioMedEng Association include
        </h3>

        <ol className="pl-6 space-y-2 text-xl leading-relaxed text-left list-decimal">
          <li>
            Opportunity to participate in all activities organised by the
            Association including the annual conference (1 delegate)
          </li>
          <li>
            Access to a community of top Engineers, Clinicians, Researchers and
            Students from the Association (UK and abroad)
          </li>
          <li>
            Job advertisement opportunities through the website, newsletter and
            social media channels
          </li>
          <li>Opportunity to participate in career and recruitment sessions</li>
          <li>
            Branding on the Association homepage with your Company logo and a
            link to your website for two years.
          </li>
          <li>
            Opportunity to submit contents/material for the Association
            Newsletters and social media channels
          </li>
          <li>
            50% discount on the sponsorship packages of the annual conference
          </li>
          <li>
            Opportunity to participate in dedicated corporate and translational
            sessions – e.g. have a 10–15 min presentation and join the panel
            discussion at the annual conference
          </li>
          <li>
            Opportunity to organise a demo or dedicated parallel session at the
            annual conference *
          </li>
          <li>
            Opportunity to sponsor key sessions and awards – e.g. the{" "}
            <em>CompanyX</em> Computational Modelling Session or{" "}
            <em>CompanyX</em> Best Poster Award
          </li>
        </ol>

        <div className="mt-8 text-xl text-left">
          <p>
            For further information about sponsorship or to discuss a tailored
            package please contact:
          </p>

          <p className="mt-4">
            Dr Gifty Tetteh at{" "}
            <a
              href="mailto:gifty@biomedeng.org"
              className="text-[#11747C] font-semibold underline"
            >
              gifty@biomedeng.org
            </a>
          </p>

          <p className="mt-2">
            Tel: +44 (0)20 7594 2874 | Mobile: +44 (0)7517 551829
          </p>
        </div>
      </div>
    </div>
  );
}

export default CorporateSponsorship;
