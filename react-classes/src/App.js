import { Component } from 'react';

class Button extends Component{
  state = {}
//primero se ejecuta el constructor de un componente
constructor(props){
  super(props)
  console.log('constructor', props);
  
}

componentDidMount(){
  console.log('component did mount');
}

componentDidUpdate(prevProps, prevState){
 console.log('component did update', prevProps, prevState);
}

componentWillUnmount(){
  console.log('unmounting component', this.props, this.state);
}
//luego se ejecuta el metodo render
  render(){
    console.log('ejecutando metodo render de button');
    return(
      <button onClick={()=> this.setState({prop:1})}>
        Enviar
      </button>
    )
  }
}

class App extends Component {
  state = {
    valor: 3
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <p>Hola Mundo!</p>
        {this.state.valor === 3? 
        <Button chanchito='feliz'/> : null }
        <button onClick={()=> this.setState({ valor: 2})}>
          Enviar en APP
        </button>
      </div>
    )
  }
}

export default App;
