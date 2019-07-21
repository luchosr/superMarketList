import React, { useState } from "react";
import Modal from "./Modal";
import "./App.css";
// import Api from "./components/Api";

function AppComponent() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState(false);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const todo = { value };
    if (!value) return;
    setTodos([...todos, todo]);
    localStorage.setItem("todos", JSON.stringify([...todos, todo]));
    setValue("");
    // list = getItemsFromLocalStorage();
    // console.log(list);
  };
  const handleDelete = event => {
    const id = event.target.id;
    todos.splice(id, 1);
    setTodos([...todos]);
    localStorage.setItem("todos", JSON.stringify([...todos]));
  };

  const selectModal = () => {
    setModal(!modal);
  };

  const getList = () => {
    console.log(getItemsFromLocalStorage("todos"));
  };
  const getItemsFromLocalStorage = async key => {
    try {
      return Promise.resolve(JSON.parse(localStorage.getItem(key)));
    } catch (error) {
      return Promise.reject("something failed " + error);
    }
    // let list = await getItemsFromLocalStorage("todos");
    // console.log(list);
  };
  getList();
  // console.log(list);
  return (
    <div className="App">
      <h1>Supermarket list</h1>
      <h3>{todos.length} item(s)</h3>
      <ul>
        {/* {list.map((data, i) => (
          <li className="todo-block" key={data.value}>
            {data.value}
            <i id={i} onClick={handleDelete}>
              {" "}
              delete
            </i>
          </li>
        ))} */}
        {/* {todos &&
          todos.map((todo, i) => (
            <li className="todo-block" key={todo.value}>
              {todo.value}
              <i id={i} onClick={handleDelete}>
                {" "}
                delete
              </i>
            </li>
          ))} */}
      </ul>

      <Modal
        displayModal={modal}
        closeModal={selectModal}
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <button onClick={selectModal} className="App__itemAdder">
        Add Item
      </button>
    </div>
  );
}

export default AppComponent;
