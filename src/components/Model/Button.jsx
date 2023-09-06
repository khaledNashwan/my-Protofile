import React from 'react'

const Button = ({ buttonName, children }) => {
  return (
    <div className="flex  rounded-lg  justify-center items-center  w-48 gap-3 p-4  bg-black text-white box relative kkk max-md:ml-8 ">
      <button className=" bg-black text-white">{buttonName}</button>
      {children}
    </div>
  );
};

export default Button