import React from "react";
import BannerCard from "../home/BannerCard";

function Banner() {
  return (
    <div className="flex items-center px-4 bg-gradient-to-l from-orange-300 via-slate-100 to-orange-100 lg:px-24">
      <div className="flex flex-col items-center w-full gap-12 py-40 md:flex-row justify between">
        {/* left side */}
        <div className="h-full space-y-8 md:w-3/2">
          <h2 className="text-3xl leading-snug text-black">
            ŚIKṢĀ: Study Centre for Indian Knowledge System for Holistic
            Advancement
          </h2>
          <p className="leading-snug text-justify text-1xl ">
            The vision of the Centre is to establish IITK at the forefront of
            IKS studies in the world. IKS in Indian education system :
            Possibilities and challengesThe Indian Knowledge System (IKS) is a
            cell of the Ministry of Education (MoE) that promotes
            interdisciplinary research on Indian knowledge systems. IKS is based
            on the understanding of nature, existence, and humans. It aims to
            preserve and disseminate IKS for societal applications and further
            research.
          </p>
        </div>

        {/* right side */}
        <div>
          <BannerCard></BannerCard>
        </div>
      </div>
    </div>
  );
}

export default Banner;
