import PropTypes from "prop-types";

import PopupOverlay from "./PopupOverlay";
import { Prev } from "../../icons/iconComponent";
import ClosePopupBtn from "./buttons/ClosePopupBtn";
import logoSrc from "../../images/logo.png";

const BasePopup = ({
  title,
  onClose,
  onPrevBtnClick,
  closeByClickOnOverlay,
  closeByPressEsc,
  children,
}) => {
  return (
    <PopupOverlay
      onClose={onClose}
      closeByClickOnOverlay={closeByClickOnOverlay}
      closeByPressEsc={closeByPressEsc}
      overlayStyles="bg-[#000000aa]"
    >
      <div className="w-[640px]  rounded-3xl overflow-hidden bg-bg-black">
        {/* ------------------------POPUP HEADER------------------------ */}

        <div className="relative w-full h-[74px] ">
          {onPrevBtnClick && (
            <button
              type="button"
              onClick={onPrevBtnClick}
              className="group absolute left-8 bottom-[45%] translate-y-1/2 px-1 h-[40px] flex items-end gap-x-3 text-bg-light-grey"
            >
              <Prev />
              <span className="text-base font-bold group-hover:underline group-focus:underline ">
                Повернутися
              </span>
            </button>
          )}
          {title ? (
            <h1 className="absolute left-1/2 bottom-[40%] -translate-x-1/2 translate-y-1/2 text-3xl font-medium text-white">
              {title}
            </h1>
          ) : (
            <img
              src={logoSrc}
              alt="app logo"
              className="absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 w-[60px] h-[60px] "
            />
          )}
          <div className="absolute right-8 bottom-[45%] translate-y-1/2">
            <ClosePopupBtn onClick={onClose} />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#ACACAC00] via-[#EB1A1A] to-[#ACACAC00]"></div>
        </div>
        {/* ------------------------POPUP BODY------------------------ */}
        <div className="px-8 py-6 ">{children}</div>
      </div>
    </PopupOverlay>
  );
};

BasePopup.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  onPrevBtnClick: PropTypes.func,
  closeByClickOnOverlay: PropTypes.bool,
  closeByPressEsc: PropTypes.bool,
  children: PropTypes.node,
};

export default BasePopup;
