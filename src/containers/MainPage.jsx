import React from "react";
import DateTimePicker from "react-datetime-picker";
import Restaurant from "../components/FindOpenRestaurants";
import { Button, Row, Col } from "react-bootstrap";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      day: "",
      time: "",
    };
  }

  onChange = (date) => this.setState({ date });

  onClick = () => {
    this.setState({
      day: this.state.date.getDay(),
      time:
        this.state.date.getHours() * 60 * 60 +
        this.state.date.getMinutes() * 60,
    });
  };

  render() {
    //getday method returns a number where sunday=0
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div className="mainSection">
        <h3 className="findHeader px-5 pb-3 pt-5 text-center">
          Find open restaurans at the time you choose!
        </h3>
        <div>
          <Row className="d-flex justify-content-center mb-3 text-center">
            <Col>
              <DateTimePicker
                onChange={this.onChange}
                value={this.state.date}
                className="picker mx-3 mb-3"
              />
              <Button className="findButton mb-2" onClick={this.onClick}>
                Find!
              </Button>
            </Col>
          </Row>
        </div>
        <Restaurant
          list={this.props.list}
          day={weekdays[this.state.day]}
          time={this.state.time}
        />
      </div>
    );
  }
}
export default MainPage;
