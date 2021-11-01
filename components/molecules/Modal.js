import React from "react";
import styled from "styled-components";
import {FiXCircle} from "react-icons/fi";
import "wicg-inert";

import Portal from "./portal";

const Modal = ({
  children,
  ref = "#__next",
  size,
  open,
  onClose,
  locked,
  closeType = "icon",
  closeButtonText = "Close",
  closeIcon,
}) => {
  const [active, setActive] = React.useState(false);
  const backdrop = React.useRef(null);

  let Icon;
  !closeIcon ? (Icon = FiXCircle) : (Icon = closeIcon);

  React.useEffect(() => {
    const {current} = backdrop;

    const transitionEnd = () => setActive(open);

    const keyHandler = (e) => !locked && [27].indexOf(e.which) >= 0 && onClose();

    const clickHandler = (e) => !locked && e.target === current && onClose();

    if (current) {
      current.addEventListener("transitionend", transitionEnd);
      current.addEventListener("click", clickHandler);
      window.addEventListener("keyup", keyHandler);
    }

    if (open) {
      window.setTimeout(() => {
        document.activeElement.blur();
        setActive(open);
        document.querySelector(ref).setAttribute("inert", "true");
      }, 10);
    }

    return () => {
      if (current) {
        current.removeEventListener("transitionend", transitionEnd);
        current.removeEventListener("click", clickHandler);
      }

      document.querySelector(ref).removeAttribute("inert");
      window.removeEventListener("keyup", keyHandler);
    };
  }, [open, locked, onClose]);

  return (
    <React.Fragment>
      {(open || active) && (
        <Portal className="modal">
          <div
            ref={backdrop}
            className={`modal__backdrop ${active && open && "modal__backdrop--active"}`}
          >
            <div className={`modal__content-container`}>
              <div className="modal__close">
                {closeType === "button" ? (
                  <button className="modal__close-button button" onClick={onClose}>
                    {closeButtonText && closeButtonText}
                  </button>
                ) : (
                  <Icon
                    className="modal__close-icon icon icon--close"
                    onClick={onClose}
                    size="2em"
                  />
                )}
              </div>
              <div className={`modal__content ${size ? "modal__content--" + size : ""}`}>
                {children}
              </div>
            </div>
          </div>
        </Portal>
      )}
    </React.Fragment>
  );
};

export default Modal;
