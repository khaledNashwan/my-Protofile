import React from 'react'

const Box = ({ Expe, num, icone }) => {
  return (
    <>
      <div className="flex flex-col gap-2 bg-slate-50 rounded-xl w-32 text-black p-4 shadow-md hover:-translate-y-4 transition-all ">
        <i class={icone}></i>
        <h1>{Expe}</h1>
        <p className="text-gray-500 text-xs">{num}</p>
      </div>
    </>
  );
};

export default Box