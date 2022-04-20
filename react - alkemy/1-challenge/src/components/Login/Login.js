import axios from "axios";
import swal from '@sweetalert/with-react';

const Login = () => {

  const handleSubmit = (e) =>{
    e.preventDefault()
     const email = e.target.email.value;
     const password = e.target.password.value;

     const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

     if(email === ''|| password === ''){
       swal(<h2>The email and password are required.</h2>)
       return;
     }

     if(email !== '' && !regexEmail.test(email)){
       swal(<h2>You must write a valid email.</h2>);
       return;
     }
     
     if(email !== 'challenge@alkemy.org' || password !== 'react'){
       swal(<h2>Your email or password are incorrect.</h2>)
       return;
     }

     axios.post('hhtp://challenge-react.alkemy.org', { email, password })
     .then(res => {
       swal(<h2>Succesful login</h2>);
       console.log(res);
      })
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
        <span>Email:</span>
          <input type="email" name="email" />
        </label>
        <br/>

        <label>
        <span>Password:</span>
          <input type="password" name="password" />
        </label>
        <br/>

        <button type="submit">Login</button>
      </form>
    </> 
  )
}

export default Login