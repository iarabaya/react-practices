import React, { useReducer } from 'react'

const Checkbox = () => {

  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <div>
      <label htmlFor="checkbox">{checked ?'Checked' : 'Not Checked'}</label>
      <input id="checkbox" type="checkbox" value={checked} onChange={toggle}/>
    </div>
  )
}

export default Checkbox