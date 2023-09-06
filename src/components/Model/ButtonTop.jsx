import React from 'react'
import '../Nav/nav.css'

const ButtonTop = () => {
window.addEventListener(`scroll`, () => {
  document
    .querySelector(".scroll")
    .classList.toggle("scroll__up", window.scrollY >= 360);
});

  return (
      <a
        href="#Home"
        className="  scroll button__top  w-max bg-black block py-1 px-1 z-10 fixed  right-12  rounded-lg  text-white text-2xl transition-all "
      >
        <i class="uil uil-arrow-up"></i>
      </a>
  );
}

export default ButtonTop