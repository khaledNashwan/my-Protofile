import Darkmode from "../Them/Darkmode";


const HeaderSocials = () => {

  return (
    <div className="flex flex-col justify-center">
      <Darkmode />
      <a href="https://www.linkedin.com" target="blank">
        <i class="uil uil-linkedin"></i>
      </a>
      <a href="https://github.com/khaledNashwan" target="blank">
        <i class="uil uil-github"></i>
      </a>
      <a href="https://twitter.com/home" target="blank">
        <i class="uil uil-twitter"></i>
      </a>
      <hr className="w-1 h-12 my-4  border-0 rounded ml-1 line__color" />
    </div>
  );
};

export default HeaderSocials;
