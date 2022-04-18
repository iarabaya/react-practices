import React, { useState } from 'react'

const App = () => {

    const [checked, setChecked] = useState(false);
  return (
    <>
      <input 
      type="checkbox" 
      value={checked} 
      onChange={()=> setChecked((checked) => !checked)}/>
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  )
}

export default App;