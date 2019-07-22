import React, { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";
import SuperListComponent from "./components/SuperListComponent";
import SuperListContainer from "./containers/SuperListContainer";
// import Api from "./components/Api";

function App() {
  return (
    <div className="App">
      <SuperListContainer />
    </div>
  );
}

export default App;
