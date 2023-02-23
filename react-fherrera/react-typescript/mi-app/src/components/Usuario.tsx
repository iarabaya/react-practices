import React from 'react'
import { useState } from 'react';


interface User {
	uid: string, 
	name: string
}

const tempUser: User = {
	uid: 'XYZ123',
	name: 'Juan Perez'
}

const Usuario = () => {

	const [user, setUser] = useState<User>(tempUser);


	const login = () => {
		setUser({
			uid:'ABCD123',
			name: 'Fernando Herrera'
		})
	}

	return (
		<div className='mt-5'>
			<h3>Usuario: useState</h3>
			<button className="btn btn-outline-primary mt-2" onClick={login}>
				Login
			</button>

			<br />

			{
				(!user) 
					? <pre>No hay usuario</pre>
					: <pre>{ JSON.stringify(user) }</pre>
			}


		</div>
	)
}

export default Usuario