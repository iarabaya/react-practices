import { Route , Routes } from 'react-router-dom';

import Login from "./components/Login/Login";
import List from "./components/List/List";

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route path='/list' element={<List/>}/>
    </Routes>
    </>
  );
}

export default App;
