import React, { Component } from 'react'
import UpdatedComponent from './contadorHOC'

class MyOtherButton extends Component {

  render() {
    return (
      <>
        <button
          onDoubleClick={this.props.incrementarConteo}
        >
          Conteo de parejas {this.props.conteo}
        </button>
      </>
    )
  }
}

export default UpdatedComponent(MyOtherButton)