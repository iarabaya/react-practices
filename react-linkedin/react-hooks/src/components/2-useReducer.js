import React, { useReducer } from 'react'

const initialValue = "hi";

const reducer = (state) => {
  switch (state.action) {
    case "yell":
      return {
        message: "HEY!"
      }

    case "whisper":
      return {
        message: "excuse me"
      }
  
    default: 
    return {
      message: "..."
    }
  }
}

const App = () => {

    const [state, dispatch] = useReducer(reducer,initialValue);
  
    return (
    <>
      <input 
      type="checkbox" 
      value={checked} 
      onChange={()=> setChecked((checked) => !checked)}/>
      {checked ? "checked" : "not checked"}
    </>
  )
}

export default App;