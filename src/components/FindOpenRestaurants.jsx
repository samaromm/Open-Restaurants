import React from "react";
import Display from "./ShowRestaurants";

const FindOpenRestaurants = (props) => {
  const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let restaurants = [];

  props.list.map((element) => {
    // ["Mon-Sun", "5:30", "pm", "2", "am"]
    let hoursSplit = element["hours"]
      .split(" ")
      .filter((a) => a !== "" && a !== "/" && a !== "-");
    // ["Mon-Sun", 63000, 7200]
    let hoursJoin = [];
    for (let i = 0; i < hoursSplit.length; i++) {
      let str = hoursSplit[i];
      if (parseInt(str)) {
        let hour = parseInt(str);
        if (hour !== 12 && hoursSplit[++i] === "pm") hour += 12;
        let minutes = 0;
        if (str.length > 2)
          minutes = parseInt(str.substring(str.length - 2, str.length));
        str = hour * 60 + minutes;
      }
      hoursJoin.push(str);
    }
    //list of all the days, each days as a key and its' time is the value
    let dayTimeList = {};
    for (let e = 0; e < hoursJoin.length; e++) {
      let ele = hoursJoin[e];
      if (typeof ele === "string") {
        let firstDay = ele.substring(0, 3);
        if (ele.length > 3) {
          let secDay = ele.substring(4, 7),
            timeFirstIndex = ++e,
            timeSecIndex = ++e;
          if (ele.length > 7) {
            let thirdDay = hoursJoin[timeFirstIndex];
            dayTimeList[thirdDay] = [
              hoursJoin[++timeFirstIndex],
              hoursJoin[++timeSecIndex],
            ];
            ++e;
          }
          for (let k = week.indexOf(firstDay); k <= week.indexOf(secDay); k++) {
            dayTimeList[week[k]] = [
              hoursJoin[timeFirstIndex],
              hoursJoin[timeSecIndex],
            ];
          }
        } else {
          dayTimeList[firstDay] = [hoursJoin[++e], hoursJoin[++e]];
        }
      }
    }
    //in case the restuarnt doesn't open 7 days a week
    if (dayTimeList[props.day]) {
      let openTime = dayTimeList[props.day][0];
      let closeTime = dayTimeList[props.day][1];
      // from pm to am, add 24 hours to the closing
      if (openTime > closeTime) closeTime += 1440;
      if (props.time >= openTime && props.time <= closeTime)
        restaurants.push(element["name"]);
    }
    return "";
  });

  return (
    <div>
      <Display restList={restaurants} />
    </div>
  );
};
export default FindOpenRestaurants;
