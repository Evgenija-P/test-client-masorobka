import PropTypes from "prop-types";

import PopupOverlay from "./PopupOverlay";
import ButtonMain from "./button";
import logoSrc from "../../images/logo.png";
import ClosePopupBtn from "./buttons/ClosePopupBtn";

const ConfirmPopup = ({
  primaryBtnText,
  onPrimaryBtnClick,
  secondaryBtnText,
  onSecondaryBtnClick,
  children,
}) => {
  return (
    <PopupOverlay
      onClose={onSecondaryBtnClick}
      overlayStyles={"bg-[#000000aa]"}
    >
      <div className="w-[640px]  rounded-3xl overflow-hidden bg-bg-black">
        {/* ------------------------POPUP HEADER------------------------ */}

        <div className="relative w-full h-[74px] ">
          <img
            src={logoSrc}
            alt="app logo"
            className="absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 w-[60px] h-[60px] "
          />
          <div className="absolute right-8 bottom-[45%] translate-y-1/2">
            <ClosePopupBtn onClick={onSecondaryBtnClick} />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#ACACAC00] via-[#EB1A1A] to-[#ACACAC00]"></div>
        </div>
        {/* ------------------------POPUP BODY------------------------ */}
        <div className="px-8 py-6 text-white flex flex-col items-center">
          {children}
          <div className="mt-11">
            <div className="flex gap-8">
              <ButtonMain style="redMedium" clickFn={onPrimaryBtnClick}>
                {primaryBtnText}
              </ButtonMain>
              <ButtonMain style="blackMedium" clickFn={onSecondaryBtnClick}>
                {secondaryBtnText}
              </ButtonMain>
            </div>
          </div>
        </div>
      </div>
    </PopupOverlay>
  );
};

ConfirmPopup.propTypes = {
  primaryBtnText: PropTypes.string.isRequired,
  secondaryBtnText: PropTypes.string.isRequired,
  onPrimaryBtnClick: PropTypes.func.isRequired,
  onSecondaryBtnClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default ConfirmPopup;
