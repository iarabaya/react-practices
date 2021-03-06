// import { context } from "../context/authContext";
// import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../context/authContext"

const Home = () => {
	// const { user } = useAuth()
	// const {user} = useContext(context);

	const { user, logout, loading } = useAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logout();
			navigate('/login');
		} catch (error) {
			console.log(error)
		}
	}

	if(loading) return <h1>Loading</h1>

	return (
		<div className='w-full max-w-xs m-auto text-black '>
			<div className='bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4'>
				<h1 className="text-3xl font-bold">
					Welcome, {user.displayName || user.email}
				</h1>
			</div>

			<button type="button" onClick={handleLogout} className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black">
				Log out
			</button>
		</div>
	)
}

export default Home