import React, { Component } from 'react'
import ReservaHora from './ReservaHora'

export default class Agenda extends Component {
  
  confirm = () => {
    alert("OK");
  }
  
  render() {
    return (
      <div>
        <h1>Doctor Nicolás</h1>
        
        <ReservaHora onClick={this.confirm}/>
        <ReservaHora onClick={this.confirm}/>
        <ReservaHora onClick={this.confirm}/>
        <ReservaHora onClick={this.confirm}/>
        <ReservaHora onClick={this.confirm}/>
        <ReservaHora onClick={this.confirm}/>

      </div>
    )
  }
}
