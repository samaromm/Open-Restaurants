import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { csv } from "d3";
import data from "./data.csv";
import Home from "./containers/MainPage";
import header from "./images/header.png";

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    csv(data).then((list) => {
      setList(list);
    });
  }, []);

  return (
    <div>
      <img src={header} className="img-fluid headerImg" alt="Header"/>
      <Router basename="/">
        <Route path="/" component={() => <Home list={list} />} />
      </Router>
    </div>
  );
};

export default App;
