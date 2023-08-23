import PropTypes from "prop-types";

import { Cross } from "../../../icons/iconComponent";

const DeleteBtn = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-6 h-6 flex justify-center items-center rounded-full bg-bg-black"
    >
      <Cross
        className="w-1/2 h-1/2 fill-bg-grey group-hover:fill-bg-red group-focus:fill-bg-red 
      transition-colors duration-[250ms]"
      />
    </button>
  );
};

DeleteBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteBtn;
