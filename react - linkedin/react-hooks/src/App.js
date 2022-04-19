import logo from './logo.svg';
import './App.css';
import StarRating from './components/1.2-useState';
import List from './components/7-context';
import Login from './components/8-fetchHook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StarRating totalStars={10}/>
        <List/> 
        <Login login={"iarabaya"}/>
      </header>
    </div>
  );
}

export default App;
