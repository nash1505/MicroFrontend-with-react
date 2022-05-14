import React from "react";
import ReactDOM from "react-dom";
import Header from "remote/Header";
import "./index.css";

const App = () => (
  <div className="container">
    <Header/>
    <h1>I am in Container</h1>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
