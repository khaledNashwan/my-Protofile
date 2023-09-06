import React from "react";
import AboutText from "../components/Model/AboutText";
import Boxs from "../components/Model/Boxs";
import Button from "../components/Model/Button";
import Img from "../components/Model/Img";
import SectionHeader from "../components/Model/SectionHeader";
import { saveAs } from "file-saver";

const About = () => {
  const handleDownload = () => {
    const fileUrl =
      "https://drive.google.com/file/d/1nDdxV9hX_vLEKJ4OqAOqAIXfGvNqnq5R/view?usp=drive_link";
    saveAs(fileUrl, "khaled.pdf");
  };

  return (
    <section className="max-md:h-auto max-lg:mb-32  section_About" id="About">
      <SectionHeader sectionHeader="About" />
      <div className="flex justify-center gap-12 max-lg:flex-col items-center container mx-auto">
        <Img />
        <div className="flex flex-col gap-8">
          <Boxs />

          <AboutText />
          <div className="flex rounded-lg  justify-center items-center  w-48 gap-3 p-4  bg-black text-white box relative kkk max-md:ml-8 ">
            <button 
            className=" bg-black text-white"
              onClick={handleDownload}
              data-aos="zoom-in-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
            Download CV
              <i class="uil uil-file text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
