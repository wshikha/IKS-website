import React from "react";
import PromoBanner from "./PromoBanner";
import Section2 from "./Section2";
import LibraryBanner from "./LibraryBanner";
import Libraryreview from "./Libraryreview";
import Marquee from "react-fast-marquee";
import Container from "./Container";
import Subject from "./Subject";

const Library = () => {
  return (
    <div>
      <LibraryBanner />
      <div className="mt-8 bg-orange-400 h-9">
        <Marquee direction="left" width="100% ">
          <h1 className="text-2xl font-bold">
            Please contact a faculty member from the IKS Centre before applying
            for Post-Doctoral Fellowship
          </h1>
        </Marquee>
      </div>
      <PromoBanner />

      <Section2 />
      <Libraryreview />
      <Container />
      <Subject />
    </div>
  );
};

export default Library;
