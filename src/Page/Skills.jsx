import React from "react";
import SectionHeader from "../components/Model/SectionHeader";
import Skill from "../components/Model/Skill";

const Skills = () => {
  return (
    <section id="skills" className=" pt-16">
      <SectionHeader sectionHeader="Skills" />
      <div className="body-font">
        <div
          className="container px-5 py-4 mx-auto flex flex-wrap"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <Skill num="1" name="HTML" stage="Expert" icone="uil uil-html5" />
          <Skill num="2" name="CSS" stage="Expert" icone="uil uil-css3-simple" />
          <Skill
            num="3"
            name="JavaScript"
            stage="middel "
            icone="uil uil-java-script"
          />
          <Skill
            num="4"
            name="responsive design"
            stage="middel "
            icone="uil uil-html5"
          />
          <Skill num="5" name="React" stage="middel" icone="uil uil-react" />
          <Skill
            num="6"
            name="tailwind css"
            stage="middel"
            icone="uil uil-html5"
          />
          <Skill
            num="7"
            name="bootstrap"
            stage="middel "
            icone="uil uil-html5"
          />
          <Skill
            num="8"
            name="git & github"
            stage="middel "
            icone="uil uil-github"
          />
          <Skill num="9" name="redex" stage="basic" icone="uil uil-html5" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
