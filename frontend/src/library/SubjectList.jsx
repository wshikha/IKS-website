import React from "react";
import { Link } from "react-router-dom";
function SubjectList() {
  return (
    <div>
      <div className="flex flex-col items-center my-28 px-15 lg:px-14">
        <h2 className="my-10 text-4xl font-semibold leading-snug text-center text-black bg-gradient-to-l from-blue-300 via-slate-100 to-blue-100 md:w-full">
          Topics You Can Explore
        </h2>
        <div className="flex items-center gap-2 ">
          <p className="text-lg px-7">
            Our library offers a rich collection of resources across a wide
            range of subjects to support your curiosity and learning journey.
            Whether you're interested in history, science, literature,
            philosophy, technology, or culture, you'll find something that
            inspires you. Dive into detailed research materials, casual reads,
            and everything in between — all curated to help you grow and explore
            new ideas.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-12 px-4 py-0 space-y-6 bg-white lg:px-24 fex-col md:flex-row">
        <div className="md:w-1/2">
          <p className="my-2 text-2xl font-semibold">
            1. ॥आन्वीक्षिकी ॥(Vedic Philosophical and Cognitive Sciences)
          </p>
          <p className="px-6 mb-10 text-justify md:w-5/6">
            At the multidisciplinary interface of [Bhāratīya] Darsanas,
            Upanishads, Prasthana Trayi, Yoga [HSS] Eastern & Western
            Philosophical Thought, Epistemology, Ontology, Philology [STEM]
            Cognitive Science, Neuroscience, Psychology
          </p>
        </div>

        <div className="md:w-1/2">
          <p className="my-2 text-2xl font-semibold">
            2. ॥व्यावहारिकी ॥(Social and Cultural Sciences)
          </p>
          <p className="px-6 mb-10 text-justify md:w-5/6">
            At the multidisciplinary interface of [Bhāratīya] Purva Mimamsa,
            Samhita, Brahmana, Shrauta Sutras, Grihya Sutra, Shulba Sutra,
            Itihasa, Purana, Dharma sastra, Itihasa, Purana, Kavya [HSS]
            History, Archaeology, Anthropology, Manuscriptology, Epigraphy,
            Philology, Geography [STEM] Data Science, Mathematics, Computer
            Science
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-12 px-4 py-0 space-y-6 bg-white lg:px-24 fex-col md:flex-row">
        <div className="md:w-1/2">
          <p className="my-2 text-2xl font-semibold">
            3.॥गणित-भौत-ज्यौतिष ॥ (Mathematical, Physical and Astronomical
            Sciences )
          </p>
          <p className="px-6 py-2 mb-16 text-justify md:w-5/6">
            At the multidisciplinary interface of [Bhāratīya] Jyotisha, Shulba
            Sutras [HSS] History of Science [STEM] Astronomy, Algebra, Number
            theory, Geometry
          </p>
        </div>

        <div className="md:w-1/2">
          <p className="my-2 text-2xl font-semibold">
            4.॥वाग्विभाग ॥ (Speech and Linguistics)
          </p>
          <p className="px-6 mb-20 text-justify md:w-5/6">
            At the multidisciplinary interface of [Bhāratīya] Siksha,
            Vyakaranam, Chandas, Nirukta, Mimamsa, Mantra Shastra [HSS]
            Comparative Linguistics, Lexicography [STEM] Speech Science,
            Phonetics, Speech Signal Processing, Speech recognition, Natural
            Language Processing
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-12 px-4 space-y-6 bg-white lg:px-24 fex-col md:flex-row">
        <div className="md:w-1/2">
          <p className="my-2 text-2xl font-semibold">
            {" "}
            5.॥ राजनीति-अर्थशास्त्र ॥ (Political, Economic and Strategic
            sciences)
          </p>
          <p className="px-6 text-justify mb-15 md:w-5/6 ">
            At the multidisciplinary interface of [Bhāratīya] Dhanurveda, Artha
            Sastra, Dandaniti, Rajaniti [HSS] Political Science, Modern military
            history, Strategic Affairs, Economics, Public policy, Management,
            Behavioural Science, Psychology [STEM] Systems Science and Modeling,
            Econometry
          </p>
        </div>

        <div className="md:w-1/2">
          <p className="my-2 text-2xl font-semibold">
            6. ॥भैषज्य-आरोग्य ॥ (Medical and Health sciences)
          </p>
          <p className="justify-center px-6 mb-20 text-justify md:w-5/6">
            At the multidisciplinary interface of [Bhāratīya] Ayurveda, Yoga,
            Sankhya [HSS] Public Policy, Psychology [STEM] Medicine, Physiology,
            Anatomy, Statistics, Life Sciences, Systems Biology, Medical Devices
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-12 px-4 py-0 space-y-6 bg-white lg:px-24 fex-col md:flex-row">
        <div className="md:w-1/2">
          <p className="my-2 text-2xl font-semibold">
            7. ॥द्रव्यगुणसंयोग॥ (Culinary, Nutritional and Pharmacological
            Sciences )
          </p>
          <p className="px-6 mb-10 text-justify md:w-5/6">
            At the multidisciplinary interface of [Bhāratīya] Paka sastra,
            Vrikshaa yurveda, dravya vijnana, ayurvediya kalas, Siddha, Folk
            medicine [HSS] Home Science, Nutrition, [STEM] Pharmacology, Botany,
            Zoology, Biochemistry, Systems Biology
          </p>
        </div>

        <div className="md:w-1/2">
          <p className="my-2 text-2xl font-semibold">
            8. ॥कृषि-पशुपाल्य-वार्ता ॥ (Agricultural Science, Veterinary and
            animal husbandry )
          </p>
          <p className="px-6 mb-10 text-justify md:w-5/6">
            At the multidisciplinary interface of [Bhāratīya] Krushi vijnana,
            vriksha-ayurveda, best practices in agriculture and animal husbandry
            [HSS] Public Policy [STEM] Agriculture, Process Engineering, Botany,
            Zoology, Veterinary Science, Meteorology, Climate Science
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-12 px-4 space-y-6 bg-white lg:px-24 fex-col md:flex-row ">
        <div className="md:w-1/2">
          <p className="my-2 text-2xl font-semibold">
            9.॥गान्धर्व ॥ (Performing Arts)
          </p>
          <p className="px-6 mb-10 text-justify md:w-5/6">
            At the multidisciplinary interface of [Bhāratīya] Natya sastra,
            Gandharva kalas, Alankara Sastra, Sahitya/Kavya, Itihasa, Purana,
            [HSS] Musicology, Animation, Computer graphics, Cinematography,
            Histrionics, Aesthetics, [STEM] Signal processing, Affective
            Neuroscience, Acoustics and Mechanics of instruments
          </p>
        </div>

        <div className="md:w-1/2">
          <p className="my-2 text-2xl font-semibold">
            10. ॥यान्त्रिक-अभियान्त्रिकी ॥(Mechanical Design & Engineering)
          </p>
          <p className="px-6 mb-20 text-justify md:w-5/6">
            At the multidisciplinary interface of [Bhāratīya] Yantra Kala, Rasa
            shastra, Dhaatu Shastra, Vaastu Shastra, Traditional kala [HSS]
            History of Science [STEM] Mechanical Engineering and Industrial
            Design, Chemistry, Metallurgy
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-12 px-4 space-y-6 bg-white lg:px-24 fex-col md:flex-row">
        <div className="md:w-1/2">
          <p className="px-6 my-2 text-2xl font-semibold">
            {" "}
            11. ॥नव्य-अभियान्त्रिकी॥ (Digital Design & Engineering)
          </p>
          <p className="px-12 mb-20 text-justify md:w-5/6 ">
            At the multidisciplinary interface of [Bhāratīya] Purana, Itihasa,
            Vaastu Shastra [HSS] Animation, Digital design, UI design [STEM]
            Data Science & ML, Natural Language Processing, Computer Vision,
            Embedded systems,
          </p>
        </div>

        <div className="md:w-1/2">
          <p className="my-2 text-2xl font-semibold">
            12. ॥वास्तु॥ (Civil and Architectural Science)
          </p>
          <p className="justify-center px-6 mb-20 text-justify md:w-5/6">
            At the multidisciplinary interface of [Bhāratīya] Vaastu sastra,
            Shilpa sastra, Tantra, Shulba Sutras [HSS] Archaeology [STEM]
            Architecture, Conservation, Structural Engineering, Town Planning,
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-12 px-4 space-y-6 bg-white lg:px-24 fex-col md:flex-row">
        <div className="md:w-1/2">
          <p className="px-6 my-2 text-2xl font-semibold">
            13. ॥रसधातु॥ (Chemical, Metallurgical & Material Sciences)
          </p>
          <p className="justify-center px-12 mb-20 text-justify md:w-5/6">
            At the multidisciplinary interface of [Bhāratīya] Rasayana sastra,
            Dhaatu sastra, Itihasa, Purana, Kavya [HSS] History, Archaeology
            [STEM] Chemistry, Metallurgy, Material Science
          </p>
        </div>
        <div className="md:w-1/2">
          <p className="my-2 text-2xl font-semibold">
            14. ॥शिल्पालेख्य॥ (Fine Arts and Sculpture)
          </p>
          <p className="justify-center px-6 mb-20 text-justify md:w-5/6">
            At the multidisciplinary interface of [Bhāratīya] Shilpa sastra,
            Alekhyaadi kalas, traditional styles across the country like
            Thanjavur, Madhubani [HSS] Fine arts, Sculpture, Art history [STEM]
            Dyes, Organic paints, Chemistry, dating of Art
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-12 px-4 space-y-6 bg-white lg:px-24 fex-col md:flex-row">
        <div className="md:w-1/2">
          <p className="my-2 text-2xl font-semibold">
            15. ॥शैक्षणिक-क्रीडनीयक ॥ (Edutainment Sciences)
          </p>
          <p className="justify-center px-12 mb-20 text-justify md:w-5/6">
            At the multidisciplinary interface of [śāstra paraṃparā] Krīḍā in
            kalā, Itihasa, Purana, Darsana, Yoga, Sankhya [HSS] Educational
            Science [STEM] Game design, Toy making, scalable manufacturing,
            Psychology
          </p>
        </div>{" "}
      </div>
    </div>
  );
}

export default SubjectList;
