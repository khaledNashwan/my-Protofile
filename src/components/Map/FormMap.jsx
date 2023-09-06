import React from 'react'
import Button from '../Model/Button';

const FormMap = () => {
  return (
    <>
      <form
        action="https://formspree.io/f/xyyvrvbv"
        method="POST"
        className="lg:w-1/3 md:w-1/2 bg-slate-50 shadow-md flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-4 rounded-xl"
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          CONTACT
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          Your email will be answered as soon as possible
        </p>
        <div className="relative mb-4">
          <label for="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label for="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label for="message" className="leading-7 text-sm text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <Button
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          buttonName="Send"
        />
      </form>
    </>
  );
}

export default FormMap