import React, { Component } from 'react'

export class ReservaHora extends Component {

  constructor(props){
    super(props);

    this.state = { time: `${this.getRandomInt(12)}`};
  }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * max).toString();
  }

  render() {
    return (
      <div>
        <h2>{this.state.time}:00</h2>
        <button onClick={this.props.onClick}> Reservar Hora </button>
      </div>
    )
  }
}

export default ReservaHora