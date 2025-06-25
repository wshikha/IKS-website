import React from "react";
import Favimg from "../assets/Picture1.png";
import Marquee from "react-fast-marquee";
const Activity = () => {
  return (
    <div>
      <div className="flex flex-col items-center px-10 my-20 lg:px-14">
        <h2 className="my-10 font-serif text-4xl font-semibold leading-snug text-center text-black bg-gradient-to-l from-orange-200 via-orange-50 to-orange-100 md:w-full">
          Events & Activity
        </h2>
        <div className="mt-8 text-white bg-orange-700 h-9">
          <Marquee direction="left" width="100% bg-orange-700">
            <h1 className="font-serif text-2xl font-bold">
              Upcoming Event: 22nd April, 10:00am - 1:00pm, RM101 at IIT Kanpur
              Inauguration of the Centre
            </h1>
          </Marquee>
        </div>
        <div className="flex items-center px-4 lg:px-24 "></div>
        <div className="flex items-center justify-between gap-12 px-4 my-2 space-y-6 bg-white lg:px-24 fex-col md:flex-row "></div>
        <div className="md:w-4/2">
          <p className="my-4 font-serif text-2xl font-semibold underline ">
            Sanskrit Teaching
          </p>
        </div>
        <p className="font-serif text-lg text-justify">
          IIT Kanpur, in collaboration with Central Sanskrit University, offers
          a variety of engaging Sanskrit teaching activities designed to promote
          the understanding and appreciation of this ancient language. Among
          these initiatives is the Saṃbhāṣaṇa Śibira, a 10-day workshop that
          introduces participants to Spoken Sanskrit, fostering conversational
          skills and cultural immersion. Additionally, the Prathamā Dīkṣā
          provides a certificate course in Non-Formal Sanskrit Education, while
          the Dvitīyā Dīkṣā offers a diploma course aimed at deeper engagement
          with the language. A forthcoming program, Tṛtīyā Dīkṣā, will further
          expand educational offerings. The Gītā Śikṣaṇa Kendram serves as a
          dedicated center for studying the Śrīmad Bhagavad Gītā, enhancing
          comprehension of its philosophical teachings. Furthermore, the Bāla
          Vargāḥ program focuses on introducing children to Sanskrit through
          interactive classes. These initiatives collectively aim to create a
          vibrant learning environment that nurtures linguistic skills and
          cultural heritage, making Sanskrit accessible to diverse audiences.
        </p>
        <div className="md:w-4/2">
          <p className="mx-auto my-10 font-serif text-2xl font-semibold underline">
            IKS Reading Club
          </p>
        </div>

        <p className="font-serif text-lg text-justify">
          The IKS Reading Club at IIT Kanpur serves as a vibrant platform for
          exploring and discussing the vast corpus of Indian Knowledge Systems
          (IKS). This initiative encourages participants to engage with a
          diverse range of texts, fostering a deeper understanding of
          traditional knowledge while promoting critical thinking and
          collaborative learning. Members of the club delve into various themes,
          including philosophy, science, literature, and cultural studies,
          allowing for interdisciplinary connections and insights. Through
          regular meetings, discussions, and reading sessions, the club aims to
          create an enriching environment where participants can share
          perspectives, enhance their knowledge, and appreciate the relevance of
          IKS in contemporary contexts. By nurturing a community of learners
          passionate about Indian heritage, the IKS Reading Club contributes to
          the broader mission of the ŚIKṢĀ Study Centre for Indian Knowledge
          System for Holistic Advancement at IIT Kanpur.
        </p>
        <div className="md:w-4/2">
          <p className="my-10 font-serif text-2xl font-semibold underline">
            IKS Field Trips
          </p>
        </div>
        <p className="font-serif text-lg text-justify">
          The IKS field trips organized by IIT Kanpur provide an enriching
          opportunity for participants to explore nearby heritage sites that are
          steeped in history and cultural significance. These excursions are
          designed to deepen the understanding of Indian Knowledge Systems (IKS)
          by connecting theoretical knowledge with real-world heritage. These
          field trips not only enhance participants' appreciation of local
          heritage but also foster a sense of connection to India's rich
          cultural narrative, making them an integral part of the IKS initiative
          at IIT Kanpur.
        </p>
      </div>
    </div>
  );
};

export default Activity;
