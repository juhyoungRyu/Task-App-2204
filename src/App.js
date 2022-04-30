import React, { useState, useEffect } from "react";
import "./App.css";
import { Main } from "./components/Main";
import { NavBar } from "./components/NavBar";

const App = () => {
  const [type, setType] = useState("All");

  const typeSelect = (t) => {
    setType(t);
  };

  return (
    <div className="App">
      {/* Top NavBar */}
      <NavBar typeSelect={typeSelect} />
      {/* Body */}
      <Main type={type} />
    </div>
  );
};

export default App;
