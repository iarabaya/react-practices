//Libraries
import { Route , Routes } from 'react-router-dom';

//Components
import Login from "./components/Login/Login";
import List from "./components/List/List";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//Styles
// import './css/App.css';
import './css/bootstrap.min.css'

function App() {
  return (
    <div className='container'>
      <Header/>

      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='/list' element={<List/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
