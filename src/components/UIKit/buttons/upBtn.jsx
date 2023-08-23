import { scrollToTop } from "../../../helpers/scrollFunctions";
import upBtn from "../../../icons/up.svg";

const UpBtn = () => {
  return (
    <button
      type="button"
      className="hadden lg:absolute w-[64px] h-[64px] rounded-full p-5 bg-bg-white lg:top-[224px] lg:right-[40px] xl:top-[72px] xl:right-[72px] shadow-swiper hover:shadow-btnWhite focus:shadow-btnWhite"
      onClick={scrollToTop}
    >
      <img src={upBtn} alt="Up" />
    </button>
  );
};

export default UpBtn;
