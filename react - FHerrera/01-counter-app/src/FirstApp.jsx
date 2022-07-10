import PropTypes from 'prop-types';

let nombre = 'Iaruskis'

const newMessage = {
	message: "hola mundo",
	title: "soy un titulo"
}

const getResult = () => {
	return 4 + 4
}

export const FirstApp = ({ title = 'hola, soy iaruskis', subtitle }) => {

	console.log(props)


	return (
		<>
			<h1>{ title }</h1>
			<h3>{ nombre + getResult() }</h3>
			<code>{ JSON.stringify(newMessage) }</code>
			<p>Soy un subtitulo</p>
			<span>{ subtitle }</span>
		</>
	)
}

FirstApp.PropTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
	title: 'no hay titulo',
	subtitle: 'no hay subtitulo',
	name: 'nombre apellido'
}