import React, { useEffect, useState } from 'react';
import './App.css';
import {csv} from 'd3';
import data from './data.csv';

const App =() => {
  const[list,setList]= useState([])
  const dateTime = new Date('2025-06-17T08:24:00');

  useEffect(()=>{
    csv(data)
    .then(list=>{
      setList(list)
    })
  },[]);

  return (
    <div>
      {console.log(dateTime)}
    </div>
  );
}

export default App;
