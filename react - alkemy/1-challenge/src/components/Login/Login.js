import axios from "axios";
import swal from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const submitHandler = (e) =>{
    e.preventDefault()
     const email = e.target.email.value;
     const password = e.target.password.value;

     const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

     if(email === ''|| password === ''){
      //  swal(<h2>The email and password are required.</h2>)
       return;
     }

     if(email !== '' && !regexEmail.test(email)){
      //  swal(<h2>You must write a valid email.</h2>);
       return;
     }
     
     if(email !== 'challenge@alkemy.org' || password !== 'react'){
      //  swal(<h2>Your email or password are incorrect.</h2>)
       return;
     }

     axios.post('http://challenge-react.alkemy.org', { email, password })
     .then(res => {
      //  swal(<h2>Succesful login</h2>);
       const { token } = res.data;
       localStorage.setItem('token', token);
       navigate('/list')
      })
      .catch(err => <pre>{JSON.stringify(err, null, 2)}</pre>)
    }
    
    // {token && <Redirect to="/listado"/>}
    return (
    <>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">
          <span>Email:</span>
          <input id="email" type="email" name="email" />
        </label>
        <br/>

        <label htmlFor="password">
          <span>Password:</span>
          <input id="password" type="password" name="password" />
        </label>
        <br/>

        <button type="submit">Login</button>
      </form>
    </> 
  )
}

export default Login