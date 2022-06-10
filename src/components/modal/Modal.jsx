import React from "react";

const Modal = ({ showModal, setShowmodal }) => {
  return <div>{showModal ? <div className="modal"></div> : null}</div>;
};

export default Modal;
