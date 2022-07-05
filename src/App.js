import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { consumirpdf } from "./services/consumir";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h3>Download File</h3>
      <a onClick={consumirpdf} download>
        Download
      </a>
    </div>
  );
}

export default App;
