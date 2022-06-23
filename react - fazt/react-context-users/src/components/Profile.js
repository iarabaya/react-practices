import React, { useContext } from 'react'
import UserContext from '../context/User/UserContext'

const Profile = () => {

	const {selectedUser}= useContext(UserContext)

  return (
    <>
			{ selectedUser ? 
				(<div className='card card-body text-center'>  
					<img src={selectedUser.avatar} alt={selectedUser.first_name} className='card-img-top rounded-circle m-auto img-fluid'/>
					<h1>{selectedUser.first_name}</h1>
					<p>{selectedUser.email}</p>
				</div>) : 
				(<h1>No user selected</h1>) 
			}

		</>
  )
}

export default Profile