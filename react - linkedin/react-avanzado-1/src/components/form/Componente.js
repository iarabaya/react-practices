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

  onNombreInputChange = (e) => {
    // console.log(e.target.value);
    const value = e.target.value;
    this.setState({item1: value})
  }
  onApellidoInputChange = (e) => {
    // console.log(e.target.value)
    const value = e.target.value;
    this.setState({item2: value})
  }
  onHobbyInputChange = (e) => {
    console.log(e.target.value)
    const value = e.target.value;
    this.setState({item3: value})
  }

  render() {
    return (
      <div>
        <h1>Ingreso Club</h1>
        <form onSubmit={this.onSubmitHandler}>
          <input type="text" name="item1" placeholder="Nombre" onChange={this.onNombreInputChange}/>
          
          <input type="text" name="item2" placeholder="Apellido" onChange={this.onApellidoInputChange}/>
          
          <input type="text" name="item3" placeholder="Hobby" onChange={this.onHobbyInputChange} />
          
          <button type="submit">Guardar</button>
        </form>

        <div>
          <h1>Resultados</h1>
          <span>valor 1: {this.state.item1}</span>
        </div>
      </div>
    );
  }
}

export default Componente;
