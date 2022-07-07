import { useState } from 'react'
import { useAuth } from '../context/authContext';
import { useNavigate, Link } from 'react-router-dom';
import Alert from './Alert';

const Register = () => {
	const { signup } = useAuth()
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
			await signup(user.email, user.password);
			navigate("/")
		} catch (error) {
			console.log(error.code)
			setError(error.message)
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
			
				<button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
					Register
				</button>
				
			</form>

			<p className='my-4 text-sm flex justify-between px-3'>Already have an account? <Link to='/login'>Login</Link></p>

		</div>
	)
}

export default Register