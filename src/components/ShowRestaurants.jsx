import React from "react";

const ShowRestaurants = (props) => {
  let returnDiv = "";
  if (props.restList.length === 0) {
    returnDiv = <h2>Empty</h2>;
  } else {
    returnDiv = props.restList.map((a) => {
      return (
        <div>
          <h2>{a}</h2>
        </div>
      );
    });
  }

  return <div>{returnDiv}</div>;
};
export default ShowRestaurants;
