import React, { Component } from 'react'
import UpdatedComponent from './contadorHOC'

class MyButton extends Component {

  render() {

    return (
      <>
        <button
          onClick={this.props.incrementarConteo}
        >
          Conteo de personas {this.props.conteo}
        </button>
      </>
    )
  }
}

export default UpdatedComponent(MyButton);