import React from "react";

const Modal = props => {
  const divStyle = {
    display: props.displayModal ? "block" : "none"
  };

  const closeModal = event => {
    event.stopPropagation();
    // event.preventDefault();
    props.closeModal();
  };
  return (
    <div className="modal" onClick={closeModal} style={divStyle}>
      <div className="modal-content" onClick={event => event.stopPropagation()}>
        <form className="todo-form" onSubmit={props.onSubmit}>
          <h2>Add Item</h2>
          <input type="text" value={props.value} onChange={props.onChange} />
          <div className="buttons">
            {" "}
            <button onClick={closeModal} className="close">
              Close
            </button>
            <button
              className="add"
              onSubmit={props.onSubmit}
              onClick={closeModal}
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
