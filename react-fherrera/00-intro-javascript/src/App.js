import './App.css';

function App() {
  const persona = { name: 'Natasha', age: 36, alias: 'Black Widow'}
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const avenger = useContext(persona);
  return (
    <div className="App">
      <h1>Hola mundo</h1>
    </div>
  );
}

export default App;
