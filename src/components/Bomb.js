// Bomb Component Code Goes Here
import React from 'react'

class Bomb extends React.Component {

  state = {
    secondsLeft: this.props.initialCount
  }

  render() {
    return (
      <p>{ this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`}</p>
    );
  }
}

export default Bomb
