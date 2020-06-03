import React from "react";
import empty from "../images/empty.png";
import uuid from "react-uuid";
import { Col, Row, Container } from "react-bootstrap";

const ShowRestaurants = (props) => {
  let returnDiv = "";
  if (props.restList.length === 0) {
    returnDiv = (
      <img
        src={empty}
        alt="nothing here"
        className="img-fluid emptyImg mx-auto d-block"
      />
    );
  } else {
    returnDiv = props.restList.map((a) => {
      return (
        <Col md="3" sm="4" key={uuid()}>
          <h3 className="restaurantsName m-3">
            <i className="fa fa-cutlery mx-2"></i>
            {a}
          </h3>
        </Col>
      );
    });
  }

  return (
    <Container>
      <Row className="d-flex justify-content-between text-center">
        {returnDiv}
      </Row>
    </Container>
  );
};
export default ShowRestaurants;
