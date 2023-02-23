const personajes = ['Goku', 'Vegeta', 'Trunks']

const [ , , p3 ] = personajes;

console.log( p3 );

const returnArray = () => {
  return ['ABC', 123];
}


const [ letras, numeros ] = retornaArreglo();

console.log(letras, numeros);

//Tarea
const useState = ( valor ) => {
  return [ 
    valor , 
    () => {console.log(`Hola ${valor}`)}
  ];
}

const [nombre, setNombre] = useState('Goku');
setNombre();

// arr[1]();
console.log(arr); 

