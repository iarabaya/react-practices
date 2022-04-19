
const Login = () => {

  const handleSubmit = (e) =>{
    e.preventDefault()
     const email = e.target.email.value;
     const password = e.target.password.value;

     const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

     if(email === ''|| password === ''){
       console.log('The email and password are required.');
       return;
     }

     if(email !== '' && !regexEmail.test(email)){
       console.log('you must write a valid email');
       return;
     }
     
     if(email !== 'challenge@alkemy.org' || password !== 'react'){
       console.log('your email or password are incorrect');
       return;
     }
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