const personajes = ['Goku', 'Vegeta', 'Trunks']

const [ p1 ] = personajes;

console.log( p1 );

const returnArray = () => {
  return ['ABC', 123];
}


const [ letras, numeros ] = retornaArreglo();

console.log(letras, numeros);

//Tarea
const useState = ( valor ) => {
  return [ 
    valor , 
    (nuevoValor) => {
      // console.log(`Hola ${valor}`)
      valor = nuevoValor
    }
  ];
}

const [nombre, setNombre] = useState('Goku');
setNombre('Vegeta');

// arr[1]();
console.log(arr); 

