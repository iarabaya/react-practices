import React, { Component } from 'react'
import UpdatedComponent from './contadorHOC'

class MyCheck extends Component {

  render() {
    return (
      <>
        <label>
          Conteo aperturas/ cierres {this.props.conteo}
          <input
            type="checkbox"
            onClick={this.props.incrementarConteo}
          />
        </label>
      </>
    )
  }
}

export default UpdatedComponent(MyCheck)