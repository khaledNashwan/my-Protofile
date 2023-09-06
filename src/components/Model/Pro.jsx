import React from 'react'
import './pro.css'
import { Link } from 'react-router-dom';

const Pro = ({ img, aaa, desc }) => {
  return (
    <>
     <Link to={aaa} target="blank">
     <div className='card__pro'>
      <div className=" rounded-lg proje ">
        <img src={img} alt="" className=" object-contain  carousel " />
      </div>
          <div>
            <p className='pro__desc'>{desc}</p>
           
          </div>
      </div>
            </Link>

    </>
  );
};

export default Pro




