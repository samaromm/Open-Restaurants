import React from "react";
import DateTimePicker from "react-datetime-picker";
import Restaurant from "../components/FindOpenRestaurants";
import { Button } from "react-bootstrap";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      day: "",
      time: "",
    };
  }

  onChange = (e) => {
    this.setState({
      date: e,
    });
  };

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
      <div>
        {console.log(this.state.date)}
        <DateTimePicker onChange={this.onChange} value={this.state.date} />
        <Button variant="outline-primary" onClick={this.onClick}>
          Primary
        </Button>
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
