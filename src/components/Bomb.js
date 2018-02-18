// Bomb Component Code Goes Here
import React from "react";

export default class BombTimer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props["initialCount"]
    };
  }
  render() {
    return (
      <div>
        {this.state.secondsLeft === 0
          ? "Boom!"
          : this.state.secondsLeft + " seconds left before I go boom!"}
      </div>
    );
  }
}
