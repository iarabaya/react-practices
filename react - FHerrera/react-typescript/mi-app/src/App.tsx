import { Counter } from "./components/Counter";
import Usuario from './components/Usuario';
import TimerPadre from './components/TimerPadre';
import CounterRed from "./components/CounterRed";

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

    </div>
  );
}

export default App;
