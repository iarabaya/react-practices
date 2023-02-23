import { useForm } from '../hooks/useForm';

interface FormData {
	postal: string,
	pais: string, 
	direccion: string
}

const Formulario = () => {

	const { postal, pais, direccion, formulario, handleChange } = useForm<FormData>({ postal: 'CCA1437', pais: 'Argentina', direccion: 'Siempre viva 123'});
	
	return (
		<form autoComplete="off">
			<div className="mb-3">
				<label htmlFor="form-label">c:</label>
				<input 
					type="text" 
					className="form-control" 
					name="postal"
					value={ postal }
					onChange={ handleChange }/>
			</div>
			
			<div className='mb-3'>
				<label htmlFor="form-label">Pais:</label>
				<input 
					type="text" 
					className="form-control" 
					name="pais"
					value={ pais }
					onChange={ handleChange }/>
			</div>

			<div className="mb-3">
				<label htmlFor="form-label">Dirección:</label>
				<input 
					type="number" 
					className="form-control" 
					name="direccion"
					value={ direccion }
					onChange={ handleChange }/>
			</div>


			<pre>{ JSON.stringify(formulario)}</pre>
				
		</form>
	)
}

export default Formulario