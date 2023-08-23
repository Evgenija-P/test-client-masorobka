import PropTypes from "prop-types";
import { useEffect } from "react";

import Portal from "./Portal";
import useScrollBlock from "../../hooks/useScrollBlock";

const PopupOverlay = ({
  closeByClickOnOverlay, // true if you need it
  closeByPressEsc, // true if you need it
  onClose, // fn changing state - show modal
  overlayStyles = "",
  children,
}) => {
  const [blockScroll, unblockScroll] = useScrollBlock();

  const onOverlayClick = (e) => {
    e.stopPropagation();
    if (!closeByClickOnOverlay) {
      return;
    }

    const isClickOnTheOverlay = e.target === e.currentTarget;

    if (isClickOnTheOverlay) {
      onClose();
    }
  };

  useEffect(() => {
    if (!closeByPressEsc) {
      return;
    }

    const onPressEsc = ({ code }) => {
      if (code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onPressEsc);

    return () => {
      window.removeEventListener("keydown", onPressEsc);
    };
  }, [closeByPressEsc, onClose]);

  useEffect(() => {
    blockScroll();

    return () => {
      unblockScroll();
    };
  }, [blockScroll, unblockScroll]);

  return (
    <>
      <Portal>
        <div
          className={`fixed inset-0 flex justify-center items-center z-[100] cursor-pointer ${overlayStyles}`}
          onClick={onOverlayClick}
        >
          <div className="cursor-default">{children}</div>
        </div>
      </Portal>
    </>
  );
};

PopupOverlay.propTypes = {
  closeByClickOnOverlay: PropTypes.bool,
  closeByPressEsc: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  overlayStyles: PropTypes.string,
  children: PropTypes.node,
};

export default PopupOverlay;
