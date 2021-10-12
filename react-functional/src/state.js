import { useState } from "react";

//reglas de los hooks:
//no se llaman en loops ni condiciones ni while
//siempre ne el nivel mas alto del componente

//Solo se llaman en 2 partes:
//Componentes de react, no por fuera
//Custom hooks
//cuando creemos un custom hook tiene que llamarse use*algo*
const State = () =>{
  const [counter, setCounter] = useState(0);

  return(
    <div>
      Contador: { counter }
      <button onClick={()=> setCounter(counter+1)}>Increase</button>
    </div>
  )
}


export default State;
