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
import Details from './components/Details/Details';

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/detail/:id' element={<Details/>}/>
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
