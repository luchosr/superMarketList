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
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <form className="todo-form" onSubmit={props.onSubmit}>
          <h2>Add Item</h2>
          <input type="text" value={props.value} onChange={props.onChange} />
          <button onClick={closeModal} onSubmit={props.onSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Modal;
