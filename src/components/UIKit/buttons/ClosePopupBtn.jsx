import Proptypes from "prop-types";

import { Cross } from "../../../icons/iconComponent";

const ClosePopupBtn = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className=" w-8 h-8  flex justify-center items-center rounded-full bg-bg-light-grey 
      hover:bg-bg-red focus:bg-bg-red transition-colors duration-[250ms]"
    >
      <Cross className=" w-1/3 h-1/3 fill-bg-black" />
    </button>
  );
};

ClosePopupBtn.propTypes = {
  onClick: Proptypes.func.isRequired,
};

export default ClosePopupBtn;
