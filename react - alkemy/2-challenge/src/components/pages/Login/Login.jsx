import React, { useState } from 'react'

const Login = () => {
  const [loginData, setLoginData] = useState();

  const onChangeInput = (e) => {
    const {name, value} = e.target;

    setLoginData((prevState) => ({...prevState, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(loginData.user);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user">
        <input name="user" type="text" placeholder='Usuario' onChange={onChangeInput}/>
      </label>
      <label htmlFor="password">
        <input name="password" type="password" placeholder='Contraseña'  onChange={onChangeInput}/>
      </label>

      <pre>
        {JSON.stringify(loginData, null, 2)}
      </pre>

      <button type='submit'> Login </button>
    </form>
  )
}

export default Login