import React, { useReducer } from 'react'

const initialState = { message: "hi" };

const reducer = (state, action) => {
  switch (action.type) {
    case "yell":
      return {
        message: `HEY! I JUST SAID ${state.message}`
      }

    case "whisper":
      return {
        message: `excuse me, ${state.message}`
      }
  
    default: 
    return {
      message: "..."
    }
  }
}

const App = () => {

    const [state, dispatch] = useReducer(reducer,initialState);
  
    return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={()=>disptach({ type: "yell" })}>YELL</button>
      <button onClick={()=>disptach({ type: "whisper" })}>whisper</button>
    </>
  )
}

export default App;