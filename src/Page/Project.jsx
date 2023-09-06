import React from "react";
import SectionHeader from "../components/Model/SectionHeader";
import Carousel from "../components/Model/Carousel ";




const Project = () => {
  return (
    <section className="section_About" id="Project">
      <SectionHeader sectionHeader="Project" />
      <div className="container  h-96 mx-auto flex justify-center  max-lg:gap-16 ">
        <Carousel />
      </div>
    </section>
  );
};

export default Project;
