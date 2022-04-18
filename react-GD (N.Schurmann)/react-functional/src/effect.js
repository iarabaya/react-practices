import { Component } from 'react';
import { useState, useEffect } from 'react';

// class App extends Component{
//   state = { counter: 0 }

//   increment = () => {
//     this.setState({ counter: this.state.counter + 1})
//   }

//   render(){
//     return(
//       <div>
//         counter: {this.state.counter}
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     )
//   }
// }

//desuscripcion de un efecto ante cambio en la dependencia
// const Interval =({counter}) =>{
//   useEffect(()=>{
//     const i = setInterval(()=> console.log(counter), 1000)
//     return () => clearInterval(i) 
//   },[counter])
//   return (
//     <p>Intervalo</p>
//   )
// }

class Interval extends Component {
  intervalo = ''
  componentDidMount(){
    this.intervalo = setInterval(()=> console.log(this.props.counter),1000)
  }

  componentWillUnmount(){
    clearInterval(this.intervalo)
  }
  render(){
    return(
      <p>Intervalo</p>
    )
  }
}

const useCounter = (initial) =>{
  const [counter, setCounter] = useState(initial);

  useEffect(()=>{
    document.title = counter
  }, [counter]);

  const increment = () =>{
    setCounter( counter + 1 );
  }

  return [counter, increment]
}

const App = () =>{
 const [counter, increment] = useCounter(0)

  return(
    <div>
      Counter: {counter}
      <button onClick={increment}>Increment</button> 
      <Interval counter={counter}/>
    </div>
  )
}

export default App;