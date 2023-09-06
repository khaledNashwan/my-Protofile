import React from "react";
import prof from "../../assets/19362653-removebg.png";
import hand from "../../assets/hand.svg";
import Line from "../Model/Line";
import "./hero.css";
import HeaderSocials from "./HeaderSocials";
import Nav from "../Nav/Nav";


const Hero = () => {
  return (
    <>
      <section className="section_hero " id="Home">
        <div className="flex justify-center items-center gap-12 max-lg:flex-col-reverse  mx-12   max-md:text-center">
          <div
            className="left_hero"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h1 className="font-extrabold flex items-center gap-4 text-3xl animate__animated animate__swing">
              Khaled Nashwan
            </h1>
            <div className="flex justify-start items-center">
              <div>
                <Line />
              </div>
              <h1>Front End Developer</h1>
            </div>
            <p className="w-80 max-lg:text-center">
              I'm creative Front End developer based in GAZA, and I'm very
              passionate and dedicated to my work.
            </p>
            <div className="bg-green-600 rounded-xl py-4 w-32 text-white  px-2 mt-8 box  kkk max-md:relative max-lg:left-20 ">
              <a
                className="text-xl text-center"
                href="https://wa.me/+970597948137"
                target="blank"
              >
                Let's Talk <i class="uil uil-whatsapp"></i>
              </a>
            </div>
          </div>

          <div>
            <img
              className="img_anmi max-md:w-96"
              src={prof}
              alt="profile"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
          </div>
        </div>

        <div
          className="absolute left-10 top-56 max-md:left-6 max-md:top-32"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <HeaderSocials />
        </div>

        <a
          href="#contact"
          className="rotate-90 flex gap-2 absolute right-10 top-72 max-md:right-0  max-md:top-48"
        >
          Scroll <span>down</span>
        </a>
      </section>
      <Nav />
    </>
  );
};

export default Hero;
