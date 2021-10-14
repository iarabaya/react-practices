import { useReducer, useState } from 'react'

//const state = { counter: 0 }

//const reduce = (acc, el) => { return newAcc }
//action = { type: string, payload: any }
const initial = { counter: 0 };

const reducer = (state, action) =>{
  console.log(state.counter)
  switch (action.type) {
    case 'increase':
      return { counter: state.counter + 1 }
    case 'decrease':
      return { counter: state.counter - 1 }
    case 'set': 
      return { counter: action.payload }
      default:
        return state
  }
}


const App = () => {
  const [value, setValue] = useState(0)
  const [state, dispatch] = useReducer(reducer, initial)
  return (
    <div>
      Contador: { state.counter }
      <input value={value} onChange={e => setValue(e.target.value)}/>
      <button onClick={ () => dispatch({ type: 'increase' })}>Más</button>
      <button onClick={ () => dispatch({ type: 'decrease' })}>Menos</button>
      <button onClick={ () => dispatch({ type: 'set', payload: parseInt(value) })}>Set</button>
    </div>
  )
}

export default App;