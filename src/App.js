import React, { useEffect, useState } from "react";
import "./App.css";
import { csv } from "d3";
import data from "./data.csv";
import Home from "./containers/MainPage";

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    csv(data).then((list) => {
      setList(list);
    });
  }, []);

  return (
    <div>
      <Home list={list} />
    </div>
  );
};

export default App;
