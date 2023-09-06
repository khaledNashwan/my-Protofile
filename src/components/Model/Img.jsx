import React from 'react'
import profile from "../../assets/me.jpg";

const Img = () => {

    
    return (
      <>
        <div
          className="box__img"
          data-aos="zoom-in-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className="img_box">
            <img src={profile} alt="profile" />
          </div>
          <div className="content">
            <h2 className="font-bold text-center ">
              Khaled Nashwan <br />
              <span>Front End | React Js </span>
            </h2>
          </div>
        </div>
      </>
    );
}

export default Img