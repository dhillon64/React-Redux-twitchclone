import React from "react";
import ReactDOM from "react-dom";

const Modal = (Props) => {
  return ReactDOM.createPortal(
    <div onClick={Props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{Props.title}</div>
        <div className="content">{Props.content}</div>
        <div className="actions">{Props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
