import React from 'react'

const CardMap = () => {
  return (
    <>
      <div className="bg-white relative flex flex-wrap items-center py-6 rounded shadow-md pr-8">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">GAZA PALESTINE</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <p className="text-indigo-500 leading-relaxed">
            khaled97nash@gmail.com
          </p>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">+970597948137</p>
        </div>
      </div>
    </>
  );
}

export default CardMap