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
		<div>
			<h1 className="text-3xl font-bold underline">
				Welcome, {user.displayName || user.email}
			</h1>

			<button type="button" onClick={handleLogout}>Log out</button>
		</div>
	)
}

export default Home