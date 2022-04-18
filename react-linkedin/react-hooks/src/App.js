import logo from './logo.svg';
import './App.css';
import StarRating from './components/1.2-useState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <StarRating totalStars={10}/>
      </header>
    </div>
  );
}

export default App;
