//Desestructuracion
//Asignacion desestructurante

const persona = {
  username: 'Tony',
  age: 45,
  alias: 'Ironman'
}

console.log(persona.nombre);
console.log(persona.age);
console.log(persona.alias);

const printPerson = ( user ) => {
  const { username: nombre, age, alias } = user;
  console.log(nombre, age, alias);
}

const printPerson2 = ({ username: nombre, age, alias, rango = "Capitan" } ) => {
  console.log(nombre, age, alias, rango);
}

const returnPerson = ({ alias, username, age, rank = 'Captain'}) => {
  return { 
    aliasName: alias,
    username,
    rank
  }
}

// const avenger = returnPerson(persona);

// eslint-disable-next-line react-hooks/rules-of-hooks
const useContext = ({ username: nombre, age, alias}) => {
  return {
    nombre,
    anios: age,
    location: {
      lat: 14.2332,
      lng: -12.334
    }
  }
}

const avenger = useContext(persona);
// console.log(avenger);
// const { nombre, anios, location: { lat, lng} } = useContext(persona);
// console.log(nombre, anios);
// console.log(lat, lng);