import PropTypes from "prop-types";

import PopupOverlay from "./PopupOverlay";
import ButtonMain from "./button";
import logoSrc from "../../images/logo.png";

const AlertPopup = ({ onOk, children }) => {
  return (
    <PopupOverlay onClose={onOk}>
      <div className="w-[640px] rounded-3xl overflow-hidden bg-bg-black">
        {/* ------------------------POPUP HEADER------------------------ */}

        <div className="relative w-full h-[74px] ">
          <img
            src={logoSrc}
            alt="app logo"
            className="absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 w-[60px] h-[60px] "
          />

          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#ACACAC00] via-[#EB1A1A] to-[#ACACAC00]"></div>
        </div>
        {/* ------------------------POPUP BODY------------------------ */}
        <div className="px-8 pb-16 text-white flex flex-col items-center">
          <div className="w-full h-[208px] flex justify-center items-center">
            {children}
          </div>
          <div className="mt-11">
            <ButtonMain style="redLarge" clickFn={onOk}>
              OK
            </ButtonMain>
          </div>
        </div>
      </div>
    </PopupOverlay>
  );
};

AlertPopup.propTypes = {
  onOk: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default AlertPopup;
