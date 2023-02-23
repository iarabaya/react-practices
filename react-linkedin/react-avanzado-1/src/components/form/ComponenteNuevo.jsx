import React, { useState } from 'react'

const ComponenteNuevo = () => {

  const [items, setItems] = useState({ nombre: ''});


  const onSubmitHandler = (e) => {
    e.preventDefault();
  }

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setItems((prevState) => ({...prevState, [name]: value }));
  }


  return (
    <div>
        <h1>Ingreso Club</h1>
        <form onSubmit={onSubmitHandler}>
          <input type="text" name="nombre" placeholder="Nombre" onChange={onInputChange}/>
          
          <input type="text" name="apellido" placeholder="Apellido" onChange={onInputChange}/>
          
          <input type="text" name="hobby" placeholder="Hobby" onChange={onInputChange} />
          
          <button type="submit">Guardar</button>
        </form>

        <hr/>
        <div>
          <h1>Valores</h1>
          <ul>
            { Object.keys(items).map((key) => {
                <li key={key}> {key} {items[key]} </li>
              })
            }
          </ul>
        </div>
      </div>
  )
}

export default ComponenteNuevo