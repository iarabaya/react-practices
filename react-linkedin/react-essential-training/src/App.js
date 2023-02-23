import './App.css';
// import FetchExample from './examples/fetchEx';
// import Example3 from './examples/useReducerEx';
// import Example2 from './examples/useEffectEx';
// import Example from './examples/useStateEx';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Events, Contact, Whoops404, Services, CompanyHistory, Location } from './pages';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}>
            <Route path="services" element={<Services/>}/>
            <Route path="history" element={<CompanyHistory/>}/>
            <Route path="location" element={<Location/>}/>
          </Route>
          <Route path="/events" element={<Events/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Whoops404/>}/>
        </Routes>   
      </div>
    );
  }
  
export default App;

  // <div className="App">
  //   <Example3/>
  //   <FetchExample login="iarabaya"/>
  //   <h1>Hello React Testing Library</h1>
  // </div>
