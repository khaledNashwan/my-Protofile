import React from 'react'
import Box from './Box';

const Boxs = () => {
  return (
    <>
      <div
        className="flex gap-2 text-center max-md:flex-wrap max-md:gap-6 max-md:px-8"
        data-aos="zoom-in-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <Box icone="uil uil-award text-2xl" Expe="Experience" num="2 + Years" />
        <Box icone="uil uil-bag text-2xl" Expe="Completed" num="20 + Project" />
        <Box
          icone="uil uil-headphones text-2xl"
          Expe="Support"
          num="Online 24/7"
        />
      </div>
    </>
  );
}

export default Boxs