import  React from 'react';
import './nav.css'

const Nav = () => {
  return (
    <nav className="w-max bg-black/30 block py-1 px-4  z-10 fixed left-1/2 -translate-x-2/4 bottom-5 flex navbar rounded-full gap-4 backdrop-blur-lg ">
      <a
        href="#Home"
        className="bg-transparent p-2 px-4 rounded-full flex text-2xl hover:bg-black/40 text-white"
      >
        <i class="uil uil-home"></i>
      </a>
      <a
        className="bg-transparent p-2 px-4 rounded-full flex text-2xl hover:bg-black/40 text-white"
        href="#About"
      >
        <i class="uil uil-user"></i>
      </a>

      <a
        href="#skills"
        className="bg-transparent p-2 px-4 rounded-full flex text-2xl hover:bg-black/40 text-white"
      >
        <i class="uil uil-book-alt"></i>
      </a>
      <a
        href="#Project"
        className="bg-transparent p-2 px-4 rounded-full flex text-2xl hover:bg-black/40 text-white"
      >
        <i class="uil uil-file-minus"></i>{" "}
      </a>

      <a
        href="#contact"
        className="bg-transparent p-2 px-4 rounded-full flex text-2xl hover:bg-black/40 text-white"
      >
        <i class="uil uil-location-point"></i>
      </a>
    </nav>
  );
};

export default Nav;
