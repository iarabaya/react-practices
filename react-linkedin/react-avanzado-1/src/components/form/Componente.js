import { Component } from 'react';

class Componente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item1: '',
      item2: '',
      item3: '',
    };
  }


  onSubmitHandler = (e) => {
    e.preventDefault();
  }

  onInputChange = (e) => {
    const value = e.target.value;
    const nombre = e.target.name;

    this.setState({
      [nombre] : value
    })
  }

  // onNombreInputChange = (e) => {
  //   // console.log(e.target.value);
  //   const value = e.target.value;
  //   this.setState({item1: value})
  // }
  // onApellidoInputChange = (e) => {
  //   // console.log(e.target.value)
  //   const value = e.target.value;
  //   this.setState({item2: value})
  // }
  // onHobbyInputChange = (e) => {
  //   console.log(e.target.value)
  //   const value = e.target.value;
  //   this.setState({item3: value})
  // }

  render() {
    return (
      <div>
        <h1>Ingreso Club</h1>
        <form onSubmit={this.onSubmitHandler} data-testid="formulario">
          <input type="text" name="item1" placeholder="Nombre" onChange={this.onInputChange}/>
          
          <input type="text" name="item2" placeholder="Apellido" onChange={this.onInputChange}/>
          
          <input type="text" name="item3" placeholder="Hobby" onChange={this.onInputChange} />
          
          <button type="submit">Guardar</button>
        </form>

        <div>
          <h1>Resultados</h1>
          <div>
            <span>Nombre: {this.state.item1}</span>
          </div>
          <div>
            <span>Apellido: {this.state.item2}</span>
          </div>
          <div>
            <span>Hobby: {this.state.item3}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Componente;
