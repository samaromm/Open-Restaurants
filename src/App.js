import React, { useEffect, useState } from 'react';
import './App.css';
import {csv} from 'd3';
import data from './data.csv';
import OpenRestaurants from './containers/FindOpenRestaurants'

const App =() => {
  const[list,setList]= useState([])
  const dateTime = new Date('2025-06-17T08:24:00');
  //getday method returns a number where sunday=0
  let weekdays=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
  let day = weekdays[dateTime.getDay()]
  let time =(dateTime.getHours()*60*60)+(dateTime.getMinutes()*60)

  useEffect(()=>{
    csv(data)
    .then(list=>{
      setList(list)
    })
  },[]);

  return (
    <div>
      <OpenRestaurants list={list} day={day} time={time}/>
    </div>
  );
}

export default App;
