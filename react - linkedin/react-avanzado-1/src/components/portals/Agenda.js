import React, { Component } from 'react'
import Confirmacion from './Confirmacion';
import ReservaHora from './ReservaHora'

export default class Agenda extends Component {

  constructor(props){
    super(props);

    this.state = { modalVisible: false };
  }
  
  confirm = () => {
    this.setState({ modalVisible:true })
  }

  modalClickHandler = (e) =>{
    this.setState({ modalVisible: false })
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

        <div onClick={this.modalClickHandler}>
          <Modal>
            { this.state.modalVisible && <Confirmacion/> }
          </Modal>
        </div>


      </div>
    )
  }
}
