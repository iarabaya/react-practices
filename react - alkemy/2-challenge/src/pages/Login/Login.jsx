import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import setLogin from '../../services/Login.service';

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [token, setToken] = useState()

  const navigate = useNavigate()

  const onChangeInput = (e) => {
    const {name, value} = e.target;

    setLoginData((prevState) => ({...prevState, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData)

    setLogin(loginData)
    .then( (res) => {
      console.log("Usuario logueado correctamente")
      setToken(res.data.token)
      localStorage.setItem("token", res.data.token)
      navigate('/home')
    }).catch((err) => {
      console.log("Hubo un error en la llamada: ", err)
    }).finally( () => {
      console.log("termino la llamada.") 
   })

  }

  return (
    <div >
       <h2>Ingresar: </h2>
        <ValidatorForm onSubmit={handleSubmit} >
          <TextValidator className="outlined-basic" 
              label="Email" 
              variant="outlined" 
              name="email"
              value={loginData.email}
              onChange={onChangeInput}
              validators={['required', 'isEmail']}
              errorMessages={['Este campo es obligatorio', 'No es un mail valido']}
          />
          <TextValidator className="outlined-basic" 
              label="Password" 
              variant="outlined" 
              type="password"
              name="password"
              value={loginData.password}
              onChange={onChangeInput}
              validators={['required']}
              errorMessages={['Este campo es obligatorio']}
          />

          <button type="submit">Ingresar</button>
        </ValidatorForm>
    </div>
  )
}

export default Login;