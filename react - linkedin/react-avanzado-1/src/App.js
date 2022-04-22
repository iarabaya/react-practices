import './App.css';
import Componente from './components/form/Componente';

function App() {

  return (
    <div className="App">
      <Componente/>
    </div>
  );
}

export default App;


// import MyComponent from './components/errorHandling/MyComponent';
// import ErrorBoundary from './components/errorHandling/ErrorBoundary';
//ERROR BOUNDARIES EXAMPLE
// <h1>Tienda Online</h1>
// <h5>Selecciona un Producto</h5>

// <ErrorBoundary>
//   <MyComponent title="Product X"/>
//   <MyComponent title="Product Y"/>
//   <MyComponent title="Product Z"/>
// </ErrorBoundary>