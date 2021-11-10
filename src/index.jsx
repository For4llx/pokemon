import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";
import "./css/style.css";

ReactDOM.render(
  <React.StrictMode>
    <Card />
    <Card />
    <Card />
  </React.StrictMode>,
  document.getElementById("root")
);
