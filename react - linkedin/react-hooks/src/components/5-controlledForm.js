import { useState } from "react"

const Form = () => {
const [sound, setSound] = useState('');
const [color, setColor] = useState('#000000');

const submit = (e) =>{
  e.preventDefault();
  alert(`${soundVal} sounds like ${colorVal}`);
  setSound("");
  setColor("#000000");  
}

  return (
    <form onSubmit={submit}>
      <input value={sound} onChange={(e) => setSound(e.target.value)} type="text" placeholder="Sound..."/>
      <input value={color} onChange={(e) => setColor(e.target.value)} type="color"/>
      <button>ADD</button>
    </form>
  )
}

export default Form