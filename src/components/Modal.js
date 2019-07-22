import React from "react";

const Modal = props => {
  const divStyle = {
    display: props.displayModal ? "block" : "none"
  };

  const closeModal = event => {
    event.stopPropagation();
    props.closeModal();
  };
  return (
    <div className="modal" onClick={closeModal} style={divStyle}>
      <div className="modal-content" onClick={event => event.stopPropagation()}>
        <form className="todo-form" onSubmit={props.onSubmit}>
          <h2>Add Item</h2>
          <input
            type="text"
            value={props.value}
            id={props.value}
            onChange={props.onChange}
            placeholder="  ^__^ "
          />
          <div className="buttons">
            {" "}
            <button onClick={closeModal} type="button" className="close">
              Close
            </button>
            <button
              className="add"
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
