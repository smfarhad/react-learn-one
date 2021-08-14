import { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Farhad",
      course: "React from Zero to Hero"
    }
  }
  changeStateData = () => {
    this.setState(
      {
        userName: this.state.userName === "Farhad" ? "Hossain" : "Farhad"
      }
    )
  }
  render() {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName} React Course "{this.state.course}"
        </h4>
        <button className="btn btn-warning m-2" onClick={this.changeStateData}>Change</button>
    </div> 
    );
  }
};
