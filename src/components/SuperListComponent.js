import React from "react";
import Modal from "./Modal";
import "../App.css";

function SuperListComponent({
  todos,
  handleDelete,
  modal,
  selectModal,
  value,
  handleChange,
  handleSubmit,
}) {
  return (
    <div className="app__block">
      <h1 className="app__title">Supermarket list</h1>
      <h3 className="app__title__items">{todos.length} item(s)</h3>
      <ul className="app__list">
        {todos &&
          todos.map((todo, i) => (
            <li className="todo__block" key={todo.value}>
              {todo.value}
              <i className="todo__block__delete" id={i} onClick={handleDelete}>
                delete
              </i>
            </li>
          ))}
      </ul>

      <Modal
        displayModal={modal}
        closeModal={selectModal}
        value={value}
        modal={modal}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <button onClick={selectModal} className="app__itemAdder" autoFocus>
        Add Item
      </button>
    </div>
  );
}

export default SuperListComponent;
