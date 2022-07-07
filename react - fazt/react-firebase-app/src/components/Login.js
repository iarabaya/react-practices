import { useState } from 'react'
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';

const Login = () => {
	const { login, loginWithGoogle } = useAuth()
	const navigate = useNavigate()


	const [user, setUser] = useState({
		email:'',
		password:''
	});

	const [error, setError] = useState()

	const handleChange = ({target: {name, value}}) => {
		setUser({...user, [name]:value});
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');

		try {
			await login(user.email, user.password);
			navigate("/")
		} catch (error) {
			console.log(error.code)
			setError(error.message)
		}
	}

	const handleGoogleSignIn = async () => {
		try {
			await loginWithGoogle()
			navigate("/")
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			{error && <Alert message={error}/>}

			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Email</label>
				<input onChange={handleChange} type="email" name="email" placeholder="youremail@company.com"/>

				<label htmlFor="password">Password</label>
				<input onChange={handleChange} type="password" name="password" id="password" placeholder='******'/>
			
				<button type="submit">Login</button>
			</form>

			<button onClick={handleGoogleSignIn}>Login with Google</button>
		</div>
	)
}

export default Login