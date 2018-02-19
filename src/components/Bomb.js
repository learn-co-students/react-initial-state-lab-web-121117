// Bomb Component Code Goes Here

import React from 'react';

class Bomb extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }

// var canDrinkAlcohol = (age > 21) ? "True, over 21" : "False, under 21";

  render(){
    return(
      <div>
      <p>{this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'}</p>
      </div>
    )
  }
}

export default Bomb;
