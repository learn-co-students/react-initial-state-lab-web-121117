import React from 'react';

class Bomb extends React.Component {
  // while (this.props.initialCount > 0){
  //   setTimeout(function(){
  //     this.props.initialCount -= 1
  //   },1000)
  // }

  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    return (
      <p>
        {this.state.secondsLeft == 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}
      </p>
    )
  }
}

export default Bomb
