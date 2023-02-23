import { useForm } from '../hooks/useForm';

interface FormData {
	email: string,
	nombre: string, 
	edad: number
}

const Formulario = () => {

	const { formulario, handleChange } = useForm<FormData>({ email: 'Fherrera@gmail.com', nombre: 'Fernando', edad: 35});
	const { email, nombre, edad } = formulario;
	return (
		<form autoComplete="off">
			<div className="mb-3">
				<label htmlFor="form-label">Email:</label>
				<input 
					type="email" 
					className="form-control" 
					name="email"
					value={ email }
					onChange={ handleChange }/>
			</div>
			
			<div className='mb-3'>
				<label htmlFor="form-label">Nombre:</label>
				<input 
					type="text" 
					className="form-control" 
					name="nombre"
					value={ nombre }
					onChange={ handleChange }/>
			</div>

			<div className="mb-3">
				<label htmlFor="form-label">Edad:</label>
				<input 
					type="number" 
					className="form-control" 
					name="edad"
					value={ edad }
					onChange={ handleChange }/>
			</div>


			<pre>{ JSON.stringify(formulario)}</pre>
				
		</form>
	)
}

export default Formulario