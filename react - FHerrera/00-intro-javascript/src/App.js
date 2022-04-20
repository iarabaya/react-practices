import './App.css';
import {useContext} from './bases/06-destructuring'; 

function App() {
  const persona = { name: 'Natasha', age: 36, alias: 'Black Widow'}
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const avenger = useContext(persona);
  return (
    <div className="App">
      <h1>Hola mundo</h1>
      {avenger.anios}
    </div>
  );
}

export default App;
