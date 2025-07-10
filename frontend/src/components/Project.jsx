import React from "react";

import { Link } from "react-router-dom";
import Picture1 from "../assets/projects/Picture1.png";
import Picture2 from "../assets/projects/Picture2.png";
import Picture3 from "../assets/projects/Picture3.png";
import Picture4 from "../assets/projects/Picture4.png";
import Picture5 from "../assets/projects/Picture5.png";
import picture6 from "../assets/projects/picture6.jpg";

const Project = () => {
  return (
    <div>
      <div className="flex flex-col items-center px-10 my-20 font-serif lg:px-14 ">
        <h2 className="my-10 text-4xl font-semibold leading-snug text-center text-white bg-amber-600 md:w-full">
          Ongoing Projects
        </h2>

        <p className="text-lg text-justify">
          The project aims to develop pedagogically relevant resource materials
          on five major IKS themes,Gaṇita, Darśana, Nīti, Kalā and Āyurveda,
          with a focus on school/college education. Gaṇita, Darśana, Nīti, Kalā
          and Āyurveda: Towards Integration of IKS into Holistic School
          Education Arnab Bhattacharya, Anurag Tripathi, K. R. Guruprasad,
          Rajesh Ranjan, Lalit Saraswat, B. V. Rathish Kumar, Shikhar K. Jha,
          Santosh K. Misra, Sudarshan Narayanan.
        </p>
        <h2 className="my-10 text-4xl font-semibold leading-snug text-center text-black">
          Abstract
        </h2>
        <p className="text-lg text-justify">
          The proposed project, mentored by faculty members associated with a
          dedicated IKS (Indian Knowledge System) centre at IIT Kanpur, focuses
          on preparing reference material that can be readily used for textbook
          writing. It is especially aimed at preparing material that can be used
          in school/college education. The major themes considered -- Gaṇita,
          Darśana, Nīti, Kalā and Āyurveda -- are those that are necessary for
          the holistic development of a student, and where students can greatly
          benefit from the knowledge available in the IKS corpus. The reference
          material developed can be easily integrated using modern pedagogical
          approaches with minimal effort in textbooks and/or by teachers. These
          reference material will be based on primary references available in
          Sanskrit. Each mentee, working under a mentor, will be assigned a
          theme and will systematically review relevant original texts. After
          detailed examination, a list of references specific to a concept will
          be filtered. These references will then be presented in simpler
          languages with examples, sketches, figures, etc. wherever applicable,
          so that students with little or no prior exposure to Sanskrit or IKS
          can also understand them easily. Utmost care will be taken to preserve
          the original meaning and context. Study materials will also include a
          comparative list of references to expose students/teachers to the
          vastness of IKS corpus as well as inculcate in them the habit of
          referring to original texts and critically reviewing them.
        </p>
      </div>
      <div className="flex flex-col items-center px-10 lg:px-14">
        <h2 className="my-10 text-4xl font-semibold leading-snug text-center text-white bg-amber-600 md:w-full">
          Research Areas
        </h2>
      </div>

      <div className="items-center justify-between px-4 space-y-6 bg-white lg:px-24">
        <ol>
          <li>
            <Link to="/project/ayurveda" className="block mt-12">
              <p className="my-2 font-serif text-2xl font-semibold text-blue-800">
                1. आयुर्विज्ञान (āyurvijñāna){" "}
              </p>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/project/kala" className="block mt-12">
              <p className="my-2 font-serif text-2xl font-semibold text-blue-800">
                2. कला (kalā)
              </p>
            </Link>
          </li>
          <li>
            <Link to="/project/darsana" className="block mt-12">
              <p className="my-2 font-serif text-2xl font-semibold text-blue-800">
                3. दर्शन (Darśana)
              </p>
            </Link>
          </li>
          <li>
            <Link to="/project/ganita" className="block mt-12">
              <p className="my-2 font-serif text-2xl font-semibold text-blue-800">
                4. गणित (gaṇita)
              </p>
            </Link>
          </li>

          <li>
            <Link to="/project/niti" className="block mt-12">
              <p className="my-2 font-serif text-2xl font-semibold text-blue-800">
                5. नीति (nīti)
              </p>
            </Link>
          </li>
        </ol>
      </div>

      <div className="flex flex-col items-center px-10 lg:px-14 ">
        <h2 className="my-10 text-4xl font-semibold leading-snug text-center text-white bg-amber-600 md:w-full">
          Automated Question-Answering for Valmiki Ramayana
        </h2>
        <p className="font-serif text-lg text-justify mb-28 px-28">
          The "Automated Question-Answering for Valmiki Ramayana" project, led
          by Arnab Bhattacharya and Anurag Tripathi, aims to develop an
          objective-type question-answering system based on the Sanskrit text of
          the Valmiki Ramayana. The primary goal is to create a reliable and
          efficient method for generating questions from this ancient epic,
          enhancing accessibility and understanding of its content. To achieve
          this, the project emphasizes manual annotation as a crucial step,
          utilizing tools such as Antarlekhaka for multi-task annotation. This
          includes tasks like identifying sentence boundaries, analyzing word
          order (Anvaya), tagging named entities, resolving coreferences, and
          constructing action graphs. Each participant in the project will work
          under a mentor to systematically review relevant original texts,
          ensuring that the resulting annotations are accurate and
          comprehensive. By leveraging these methodologies, the project aspires
          to provide a robust framework for engaging with the rich narratives of
          the Valmiki Ramayana, ultimately facilitating deeper insights into
          this revered literary work.
        </p>
      </div>
    </div>
  );
};

export default Project;
