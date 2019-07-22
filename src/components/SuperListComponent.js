import React from "react";
import Modal from "./Modal";
import "../App.css";
// import Api from "./components/Api";

function SuperListComponent(props) {
  return (
    <div className="App">
      <h1>Supermarket list</h1>
      <h3>{props.todos.length} item(s)</h3>
      <ul>
        {props.todos &&
          props.todos.map((todo, i) => (
            <li className="todo-block" key={todo.value}>
              {todo.value}
              <i id={i} onClick={props.handleDelete}>
                {" "}
                delete
              </i>
            </li>
          ))}
      </ul>

      <Modal
        displayModal={props.modal}
        closeModal={props.selectModal}
        value={props.value}
        modal={props.modal}
        onChange={props.handleChange}
        onSubmit={props.handleSubmit}
      />
      <button onClick={props.selectModal} className="App__itemAdder">
        Add Item
      </button>
    </div>
  );
}

export default SuperListComponent;
