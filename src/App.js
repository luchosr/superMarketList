import React, { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";
import SuperListContainer from "./containers/SuperListContainer";

function App() {
  return (
    <div className="app">
      <SuperListContainer />
    </div>
  );
}

export default App;
