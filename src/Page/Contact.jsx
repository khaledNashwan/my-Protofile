import React from "react";
import FormMap from "../components/Map/FormMap";
import Map from "../components/Map/Map";
import SectionHeader from "../components/Model/SectionHeader";

const Contact = () => {
  return (
    <section className=" pt-10 " id="contact">
      <SectionHeader sectionHeader="Contact" />
      <main className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <Map />
          <FormMap />
        </div>
      </main>
    </section>
  );
};

export default Contact;
