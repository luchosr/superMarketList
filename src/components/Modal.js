import React from "react";

const Modal = (props) => {
  const divStyle = {
    display: props.displayModal ? "block" : "none",
  };

  const closeModal = (event) => {
    event.stopPropagation();
    props.closeModal();
  };
  const focusInput = (input) => {
    if (input) {
      input.focus();
    }
  };

  return (
    <div className="modal" onClick={closeModal} style={divStyle}>
      <div
        className="modal__content"
        onClick={(event) => event.stopPropagation()}
      >
        <form className="modal__form" onSubmit={props.onSubmit}>
          <h2>Add Item</h2>
          <input
            className="modal__input"
            ref={focusInput}
            type="text"
            value={props.value}
            id={props.value}
            onChange={props.onChange}
          />
          <div className="modal__buttons">
            <button
              onClick={closeModal}
              type="button"
              className="modal__buttons__close"
            >
              Close
            </button>
            <button
              className="modal__buttons__add"
              onClick={closeModal}
              disabled={!props.value}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Modal;
