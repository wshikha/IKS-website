import React from "react";
import Marquee from "react-fast-marquee";

const Activity = () => {
  return (
    <div className="px-4 py-12 font-serif text-black bg-amber-50 md:px-10 lg:px-24">
      <div className="max-w-5xl mx-auto mt-24 space-y-10">
        {/* Heading */}
        <h2 className="inline-block pb-2 mx-auto text-3xl font-bold border-b-2 md:text-4xl text-amber-800 border-amber-800">
          Activities
        </h2>

        {/* Marquee Event Banner */}
        <div className="mb-12 rounded-md shadow-inner bg-amber-700">
          <Marquee
            direction="left"
            speed={60}
            gradient={false}
            className="px-4 py-2 font-serif text-xl font-semibold text-white"
          >
            Upcoming Event: 11th August 2025, 06:15 PM – 08:15 PM, RM101 at IIT
            Kanpur — Sanskrit Week Celebration
          </Marquee>
        </div>

        {/* Activity Sections */}
        <div className="space-y-14">
          {/* Sanskrit Teaching */}
          <section className="p-8 bg-white shadow-md rounded-xl">
            <h3 className="inline-block mb-4 font-serif text-2xl font-semibold border-b-2 text-amber-800 border-amber-400">
              Sanskrit Teaching
            </h3>
            <p className="font-serif text-lg text-justify text-gray-800">
              IIT Kanpur, in collaboration with Central Sanskrit University,
              offers a variety of engaging Sanskrit teaching activities designed
              to promote the understanding and appreciation of this ancient
              language. Among these initiatives is the{" "}
              <strong>Saṃbhāṣaṇa Śibira</strong>, a 10-day workshop that
              introduces participants to Spoken Sanskrit, fostering
              conversational skills and cultural immersion. Additionally, the{" "}
              <strong>Prathamā Dīkṣā</strong> provides a certificate course in
              Non-Formal Sanskrit Education, while the{" "}
              <strong>Dvitīyā Dīkṣā</strong> offers a diploma course aimed at
              deeper engagement with the language. A forthcoming program,{" "}
              <strong>Tṛtīyā Dīkṣā</strong>, will further expand educational
              offerings. The <strong>Gītā Śikṣaṇa Kendram</strong> serves as a
              dedicated center for studying the Śrīmad Bhagavad Gītā, enhancing
              comprehension of its philosophical teachings. Furthermore, the{" "}
              <strong>Bāla Vargāḥ</strong> program focuses on introducing
              children to Sanskrit through interactive classes. These
              initiatives collectively aim to create a vibrant learning
              environment that nurtures linguistic skills and cultural heritage.
            </p>
          </section>

          {/* IKS Reading Club */}
          <section className="p-8 bg-white shadow-md rounded-xl">
            <h3 className="inline-block mb-4 font-serif text-2xl font-semibold border-b-2 text-amber-800 border-amber-400">
              IKS Reading Club
            </h3>
            <p className="font-serif text-lg text-justify text-gray-800">
              The IKS Reading Club at IIT Kanpur serves as a vibrant platform
              for exploring and discussing the vast corpus of Indian Knowledge
              Systems (IKS). This initiative encourages participants to engage
              with a diverse range of texts, fostering a deeper understanding of
              traditional knowledge while promoting critical thinking and
              collaborative learning. Members of the club delve into various
              themes, including philosophy, science, literature, and cultural
              studies, allowing for interdisciplinary connections and insights.
              Through regular meetings, discussions, and reading sessions, the
              club aims to create an enriching environment where participants
              can share perspectives, enhance their knowledge, and appreciate
              the relevance of IKS in contemporary contexts.
            </p>
          </section>

          {/* IKS Field Trips */}
          <section className="p-8 bg-white shadow-md rounded-xl">
            <h3 className="inline-block mb-4 font-serif text-2xl font-semibold border-b-2 text-amber-800 border-amber-400">
              IKS Field Trips
            </h3>
            <p className="font-serif text-lg text-justify text-gray-800">
              The IKS field trips organized by IIT Kanpur provide an enriching
              opportunity for participants to explore nearby heritage sites that
              are steeped in history and cultural significance. These excursions
              are designed to deepen the understanding of Indian Knowledge
              Systems (IKS) by connecting theoretical knowledge with real-world
              heritage. These field trips not only enhance participants'
              appreciation of local heritage but also foster a sense of
              connection to India's rich cultural narrative, making them an
              integral part of the IKS initiative at IIT Kanpur.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Activity;
