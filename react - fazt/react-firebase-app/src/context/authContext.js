import { createContext, useContext, useEffect, useState } from "react";
import {	createUserWithEmailAndPassword,
					signInWithEmailAndPassword, 
				 	onAuthStateChanged,
					signOut,
					GoogleAuthProvider,
					signInWithPopup } from 'firebase/auth';
import {auth} from '../firebase';

export const authContext = createContext();


//hook auth
export const useAuth = () => {
	const context = useContext(authContext)
	if(!context) throw new Error('There is no auth provider')
	return context
}

export function AuthProvider({children}){

	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const signup = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	const login = (email, password) => {
		console.log(email, password);
		return signInWithEmailAndPassword(auth, email, password);
	}

	const logout = () => {
		signOut(auth);
	}

	const loginWithGoogle = () => {
		const googleProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleProvider);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			console.log(currentUser);
			setUser(currentUser);
			setLoading(false);
		});

		return () => unsubscribe();
	},[])

	return(
		<authContext.Provider value={{ signup, login, logout, user, loading, loginWithGoogle }}>
			{children}
		</authContext.Provider>
	)
}