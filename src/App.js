import React, { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState(false);

  const handleChange = event => {
    setValue(event.target.value);
    console.log("el valor es " + value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const todo = { value };
    if (!value) return;
    setTodos([...todos, todo]);
    setValue("");
  };
  const handleDelete = event => {
    const id = event.target.id;
    todos.splice(id, 1);
    setTodos([...todos]);
  };

  const selectModal = () => {
    setModal(!modal);
  };
  return (
    <div className="App">
      <h1>Supermarket list</h1>
      <h3>{todos.length} item(s)</h3>
      <ul>
        {todos &&
          todos.map((todo, i) => (
            <li className="todo-block" key={todo.value}>
              {todo.value}
              <i id={i} onClick={handleDelete}>
                {" "}
                delete
              </i>
            </li>
          ))}
      </ul>

      {/* <p onClick={selectModal}>Open Modal</p> */}
      <Modal
        displayModal={modal}
        closeModal={selectModal}
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {/* <form className="todo-form" onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
      </form> */}
      <button onClick={selectModal} className="App__itemAdder">
        Add Item
      </button>
    </div>
  );
}

export default App;
