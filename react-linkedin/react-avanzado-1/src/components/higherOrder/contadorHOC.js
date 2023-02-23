import React, { Component } from 'react'


const UpdatedComponent = (OriginalComponent) => {

  class contadorHOC extends Component {
    
    constructor(props){
      super(props)
  
      this.state = {
        conteo: 0
      }
    }
  
    incrementarConteo = () => {
      this.setState(prevState => ({ conteo: prevState.conteo + 1 }))
    }
    
    render() {
      return (
        <OriginalComponent conteo={this.state.conteo} incrementarConteo={this.incrementarConteo}/>
      )
    }
  }

  return contadorHOC
}

export default UpdatedComponent