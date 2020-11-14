import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Modal = forwardRef(
  (
    { children, title, actionButtonLabel, buttonAction, cancelButtonLabel },
    ref
  ) => {
    const [display, setDisplay] = useState(false);

    useImperativeHandle(ref, () => {
      return {
        openModal: () => open(),
        close: () => close(),
      };
    });

    const open = () => {
      setDisplay(true);
    };

    const close = () => {
      setDisplay(false);
    };

    const handleConfirm = () => {
      buttonAction();
      close();
    };

    return (
      <>
        {ReactDOM.createPortal(
          <div className={`modal${display ? " is-active" : ""}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">{title}</p>
                <button
                  className="delete"
                  aria-label="close"
                  onClick={close}
                ></button>
              </header>
              <section className="modal-card-body">{children}</section>
              <footer
                className="modal-card-foot"
                style={{ justifyContent: "flex-end" }}
              >
                <button className="button is-rounded" onClick={close}>
                  {cancelButtonLabel}
                </button>
                <button
                  className="button is-rounded is-danger"
                  onClick={handleConfirm}
                >
                  {actionButtonLabel}
                </button>
              </footer>
            </div>
          </div>,
          document.getElementById("root")
        )}
      </>
    );
  }
);

export default Modal;

Modal.propTypes = {
  title: PropTypes.string,
  actionButtonLabel: PropTypes.string,
  buttonAction: PropTypes.func,
  cancelButtonLabel: PropTypes.string,
};
