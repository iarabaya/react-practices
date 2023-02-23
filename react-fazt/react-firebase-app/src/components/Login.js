import { useState } from 'react'
import { useAuth } from '../context/authContext';
import { useNavigate, Link } from 'react-router-dom';
import Alert from './Alert';

const Login = () => {
	const { login, loginWithGoogle, resetPassword } = useAuth()
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
			// console.log(error.code)
			setError(error.message)
		}
	}

	const handleGoogleSignIn = async () => {
		try {
			await loginWithGoogle()
			navigate("/")
		} catch (error) {
			setError(error.message);
		}
	}

	const handleResetPassword = async () => {
		if (!user.email) return setError("Please enter your email");
		try {
			await resetPassword(user.email)
			
		} catch (error) {
			setError(error.message);
		}
	}

	return (
		<div className='w-full max-w-xs m-auto'>
			{error && <Alert message={error}/>}

			<form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<div className='mb-4'>
					<label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
					<input onChange={handleChange} type="email" name="email" placeholder="youremail@company.com" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline'/>
				</div>

				<div className='mb-4'>
					<label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
					<input onChange={handleChange} type="password" name="password" id="password" placeholder='******' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline'/>
				</div>
			
				<div className='flex items-center justify-between'>
					<button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
						Login
					</button>
					<a onClick={() => handleResetPassword} href='#!' className='inline-block align-baseline font-bold text-sm text-blue hover:text-blue-800'>Forgot Password?</a>
				</div>

			</form>
			<p className='my-4 text-sm flex justify-between px-3'>Don't have an account? <Link to='/register'>Register</Link></p>

			<button onClick={handleGoogleSignIn} className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full">
				Login with Google
			</button>
		</div>
	)
}

export default Login