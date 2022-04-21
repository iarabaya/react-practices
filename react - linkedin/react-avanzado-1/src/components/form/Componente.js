class Componente extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  onSubmitHandler = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Ingreso Club</h1>
        <form onSubmit={this.onSubmitHandler}>
          <input type="text" name="item1" placeholder="Nombre" />
          
          <input type="text" name="item2" placeholder="Apellido" />
          
          <input type="text" name="item3" placeholder="Hobby" />
          
          <button type="submit">Guardar</button>
        </form>
      </div>
    );
  }
}

export default Componente;
