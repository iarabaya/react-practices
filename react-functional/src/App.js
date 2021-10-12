// import { Component } from 'react';
import { useState } from 'react';

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
const useCounter = (initial) =>{
  const [counter, setCounter] = useState(initial);

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
    </div>
  )
}

export default App;