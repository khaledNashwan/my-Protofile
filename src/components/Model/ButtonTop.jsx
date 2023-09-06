import React from 'react'

const ButtonTop = () => {
window.addEventListener(`scroll`, () => {
  document
    .querySelector(".scroll")
    .classList.toggle("scroll__up", window.scrollY >= 360);
});

  return (
      <a
        href="#Home"
        className="  scroll w-max bg-black block py-1 px-1 z-10 fixed  right-12 max-md:right-2  -bottom-1/4 flex rounded-lg gap-3 text-white text-2xl transition-all "
      >
        <i class="uil uil-arrow-up"></i>
      </a>
  );
}

export default ButtonTop