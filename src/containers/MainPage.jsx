import React from "react";
import DateTimePicker from "react-datetime-picker";
import Restaurant from "../components/FindOpenRestaurants";
import { Button} from "react-bootstrap";

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
    if (this.state.date) {
      this.setState({
        day: this.state.date.getDay(),
        time:
          this.state.date.getHours() * 60 +
          this.state.date.getMinutes() ,
      });
    }
  };

  render() {
    //getday method returns a number where sunday=0
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div className="mainSection">
        <h3 className="findHeader px-5 pb-3 pt-5 text-center">
          Find open restaurans at the time you choose!
        </h3>
        <div className="text-center">
          <DateTimePicker
            onChange={this.onChange}
            value={this.state.date}
            className="picker mx-3 mb-3"
          />
          <Button className="findButton mb-2" onClick={this.onClick}>
            Find!
          </Button>
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
