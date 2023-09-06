import React from 'react'

const Skill = ({ num , name, stage, icone }) => {
  return (
    <>
      <div className="flex relative pt-10 pb-10 sm:items-center mx-auto">
        <div className="h-full w-6 absolute inset-0 flex  items-center justify-center">
          <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center number relative z-1 title-font font-medium text-sm">
          {num}
        </div>
        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div className="flex-shrink-0 w-24 h-24  rounded-full inline-flex items-center justify-center">
            <i class={`${icone} text-5xl`}></i>
          </div>
          <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 className="font-medium  mb-1 text-xl w-52">
              {name}
            </h2>
            <p className="leading-relaxed">{stage}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill