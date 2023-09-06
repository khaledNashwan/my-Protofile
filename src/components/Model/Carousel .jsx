// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./styles.css";
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from "swiper";
import Pro from "./Pro";
import phote1 from "../../assets/coffe.jpg";
import phote2 from "../../assets/career.jpg";
import phote3 from "../../assets/WhatsApp Image 2023-09-06 at 11.37.54.jpg";
import phote5 from "../../assets/Screenshot.jpg";
import phote6 from "../../assets/fitness.jpg";


const Carousel  = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        loop={true}
        navigation={true} 
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        data-aos="fade-up-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <SwiperSlide>
          <Pro
            img={phote1}
            aaa="https://melodic-peony-69640d.netlify.app/"
            desc="React Project with context hook"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Pro
            img={phote2}
            aaa="https://velvety-trifle-17ede9.netlify.app/"
            desc="landing page with responsive design"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Pro
            img={phote3}
            aaa="https://splendorous-mochi-d802b6.netlify.app/"
            desc="landing page with responsive design and tailwindcss "
          />
        </SwiperSlide>

        <SwiperSlide>
          <Pro
            img={phote5}
            aaa="https://khalednashwan.netlify.app/"
            desc="React Project with redex toolkit"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Pro
            img={phote6}
            aaa="https://khaledwebsite2.netlify.app/"
            desc="landing page with responsive design "
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel 