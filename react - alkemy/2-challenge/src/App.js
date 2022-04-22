import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import HomePage from './components/pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <h1>Hero</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
