import React, { useReducer } from 'react'

const Example3 = () => {

  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <div>
      <input type="checkbox" onClick={toggle}/>
      <p>{checked ? 'Checked' : 'Not Checked'}</p>
    </div>
  )
}

export default Example3