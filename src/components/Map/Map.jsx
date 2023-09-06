import React from 'react'
import CardMap from './CardMap';

const Map = () => {
  return (
    <>
      <div
        className="lg:w-2/3 md:w-1/2 bg-slate-50 shadow-md rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0"
          frameborder="0"
          title="map"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          src="https://maps.google.com/maps?q=university%20of%20gaza&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          id="gmap_canvas"
        ></iframe>

        <CardMap />
      </div>
    </>
  );
}

export default Map