import React from "react";
import empty from '../images/empty.png'

const ShowRestaurants = (props) => {
  let returnDiv = "";
  if (props.restList.length === 0) {
    returnDiv = <img src={empty} alt="nothing here" className="img-fluid emptyImg mx-auto d-block"/>;
  } else {
    returnDiv = props.restList.map((a) => {
      return (
        <div>
          {a}
        </div>
      );
    });
  }

  return <div>{returnDiv}</div>;
};
export default ShowRestaurants;
