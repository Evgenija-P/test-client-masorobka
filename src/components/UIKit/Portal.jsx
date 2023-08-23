import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Portal = ({ children }) => {
  const [container] = useState(() => document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return createPortal(children, container);
};

Portal.propTypes = {
  children: PropTypes.node,
};

export default Portal;
