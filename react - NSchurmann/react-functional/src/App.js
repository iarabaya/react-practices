import { useRef } from 'react'

const App = () => {
  //podemos acceder a los elementos html del jsx
  //similar al document.getElement
  const ref = useRef();
  const inputRef = useRef();
  const click = () =>{
    console.log(ref.current);
    ref.current.innerHTML = 'Chanchito feliz';
  }

  const focus = () =>{
    inputRef.current.focus();
  }
  return (
    <div>
      <input ref={inputRef}/>
      <button onClick={focus}>Focus</button>
      <div onclick={click} ref={ref}>lala</div>
    </div>
  )
}

export default App
