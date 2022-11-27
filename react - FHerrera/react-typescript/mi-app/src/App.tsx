import { Counter } from "./components/Counter";
import Usuario from './components/Usuario';
import TimerPadre from './components/TimerPadre';
import CounterRed from "./components/CounterRed";
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App">
      
			<h1>React + Typescript</h1>
			<hr />
			<Counter/>
			<Usuario/>
		
			<h3>useEffect - useRef</h3>
			<hr />

			<TimerPadre/>

			<h3>useReducer</h3>
			<hr />

			<CounterRed/>

			<h3>customHooks</h3>
			<hr />

			<Formulario/>

    </div>
  );
}

export default App;
