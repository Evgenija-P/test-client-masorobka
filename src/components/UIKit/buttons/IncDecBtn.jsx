import PropTypes from "prop-types";
import { Plus, Minus } from "../../../icons/iconComponent";

const BTN_SIZES = {
  s: "w-8 h-8",
  m: "w-12 h-12",
};

const IncDecBtn = ({ type, onClick, size, outlined, disabled }) => {
  const styles = `${BTN_SIZES[size]} ${outlined && "border border-white"}`;

  return (
    <button
      type="button"
      disabled={disabled}
      className={`flex justify-center items-center rounded-lg bg-bg-black ${styles}`}
      onClick={onClick}
    >
      {type === "inc" && <Plus className="w-1/2 h-1/2" />}
      {type === "dec" && <Minus className="w-1/2 h-1/2" />}
    </button>
  );
};

IncDecBtn.propTypes = {
  type: PropTypes.oneOf(["inc", "dec"]).isRequired, // inc-increase by one, dec-decrease by one
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["s", "m"]).isRequired, //s-small, m-medium
  outlined: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default IncDecBtn;
