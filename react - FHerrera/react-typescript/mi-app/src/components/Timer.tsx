import { useEffect, useState, useRef } from "react";

type TimerArgs = {
	milisegundos: number,
	segundos?: number
}

export const Timer = ({ milisegundos }: TimerArgs) => {
	const [segundos, setSegundos] = useState(0);

	const ref = useRef<NodeJS.Timer>();
	console.log(milisegundos)

	useEffect(() => {
		ref.current && clearInterval(ref.current); 
		console.log('useEffect');
		ref.current = setInterval( () => setSegundos( s => s + 1 ), milisegundos );

	}, [milisegundos])
	
	return (
		<>
			<h4>Timer: <small>{segundos}</small></h4>
		</>
	)
}