import React from "react";

const Project = () => {
  return (
    <section className="px-4 py-12 font-serif text-black bg-amber-50 md:px-10 lg:px-24">
      <div className="max-w-5xl mx-auto mt-24 space-y-10">
        {/* Heading */}
        <h2 className="inline-block pb-2 mx-auto text-3xl font-bold border-b-2 md:text-4xl text-amber-800 border-amber-800">
          Ongoing Projects
        </h2>

        {/* First Project */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-amber-700 md:text-3xl">
            Gaṇita, Darśana, Nīti, Kalā and Āyurveda: Towards Integration of IKS
            into Holistic School Education
          </h3>
          <p className="text-lg text-justify">
            The project aims to develop pedagogically relevant resource
            materials on five major IKS themes—Gaṇita, Darśana, Nīti, Kalā and
            Āyurveda—with a focus on school/college education.
          </p>
          <p className="text-lg text-justify">
            Faculty involved: Prof. Arnab Bhattacharya, Prof. Anurag Tripathi,
            Prof. K. R. Guruprasad, Prof. Rajesh Ranjan, Prof. Lalit Saraswat,
            Prof. B. V. Rathish Kumar, Prof. Shikhar K. Jha, Prof. Santosh K.
            Misra, Prof. Sudarshan Narayanan.
          </p>
        </div>

        {/* Abstract Section */}
        <div className="space-y-6">
          <h2 className="inline-block pb-2 mx-auto text-3xl font-bold border-b-2 md:text-4xl text-amber-800 border-amber-800">
            Abstract
          </h2>
          <p className="text-lg text-justify">
            The proposed project, mentored by faculty members associated with a
            dedicated IKS (Indian Knowledge System) centre at IIT Kanpur,
            focuses on preparing reference material that can be readily used for
            textbook writing. It is especially aimed at preparing material that
            can be used in school/college education. The major themes
            considered—Gaṇita, Darśana, Nīti, Kalā and Āyurveda—are those that
            are necessary for the holistic development of a student, and where
            students can greatly benefit from the knowledge available in the IKS
            corpus.
          </p>
          <p className="text-lg text-justify">
            The reference material developed can be easily integrated using
            modern pedagogical approaches with minimal effort in textbooks
            and/or by teachers. These reference materials will be based on
            primary references available in Sanskrit. Each mentee, working under
            a mentor, will be assigned a theme and will systematically review
            relevant original texts. After detailed examination, a list of
            references specific to a concept will be filtered. These references
            will then be presented in simpler languages with examples, sketches,
            figures, etc., wherever applicable, so that students with little or
            no prior exposure to Sanskrit or IKS can also understand them
            easily. Utmost care will be taken to preserve the original meaning
            and context. Study materials will also include a comparative list of
            references to expose students/teachers to the vastness of the IKS
            corpus as well as inculcate in them the habit of referring to
            original texts and critically reviewing them.
          </p>
        </div>

        {/* Second Project */}
        <div className="space-y-6">
          <h2 className="inline-block pb-2 mx-auto text-3xl font-bold border-b-2 md:text-4xl text-amber-800 border-amber-800">
            Automated Question-Answering for Valmiki Ramayana
          </h2>
          <p className="text-lg text-justify">
            The "Automated Question-Answering for Valmiki Ramayana" project, led
            by Prof. Arnab Bhattacharya and Prof. Anurag Tripathi, aims to
            develop an objective-type question-answering system based on the
            Sanskrit text of the Valmiki Ramayana. The primary goal is to create
            a reliable and efficient method for generating questions from this
            ancient epic, enhancing accessibility and understanding of its
            content.
          </p>
          <p className="text-lg text-justify">
            To achieve this, the project emphasizes manual annotation as a
            crucial step, utilizing tools such as Antarlekhaka for multi-task
            annotation. This includes tasks like identifying sentence
            boundaries, analyzing word order (Anvaya), tagging named entities,
            resolving coreferences, and constructing action graphs. Each
            participant in the project will work under a mentor to
            systematically review relevant original texts, ensuring that the
            resulting annotations are accurate and comprehensive. By leveraging
            these methodologies, the project aspires to provide a robust
            framework for engaging with the rich narratives of the Valmiki
            Ramayana, ultimately facilitating deeper insights into this revered
            literary work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;
