import React, { useState, useEffect } from "react";
import SuperListComponent from "../components/SuperListComponent";
import api from "../api.js";

function SuperListContainer() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState("");
  const [status, setStatus] = useState("pending");

  localStorage.setItem("todos", JSON.stringify([...todos]));

  useEffect(() => {
    api.todos
      .get()
      .then(setTodos)
      .then(() => setStatus("resolved"));
  }, []);

  const handleChange = event => {
    setValue(event.target.value);
    setId(event.target.id);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const todo = { id: id, value: value };
    if (!value) return;
    setTodos([...todos, todo]);

    localStorage.setItem("todos", JSON.stringify([...todos, todo]));
    setValue("");
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
  if (status === "pending") {
    return "... loading";
  }
  return (
    <SuperListComponent
      handleChange={handleChange}
      handleDelete={handleDelete}
      handleSubmit={handleSubmit}
      selectModal={selectModal}
      todos={todos}
      value={value}
      modal={modal}
    />
  );
}

export default SuperListContainer;
