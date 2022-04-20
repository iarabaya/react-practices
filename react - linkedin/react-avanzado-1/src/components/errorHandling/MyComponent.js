import React, { useState } from 'react'
import MyError from './MyError'
const MyComponent = (props) => {
  const [visibleError, setVisibleError] = useState();

  const comprarProducto = (e) => {
    try {
      e.metodoIncorrecto();
    } catch (error) {
      displayError();
    }
  }


  const displayError = () => {
    setVisibleError(true);
  }


  if(!props.title){
    throw new Error()
  }
  
  return (
    <div>
      <h5>{props.title}</h5>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <button onClick={comprarProducto}>Comprar</button>
      {visibleError && <MyError/>}
    </div>
  )
}

export default MyComponent