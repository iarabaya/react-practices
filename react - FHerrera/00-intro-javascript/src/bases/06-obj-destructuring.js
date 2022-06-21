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

const returnPerson = ( user ) => {
  const { username: nombre, age, alias } = user;
  console.log(nombre, age, alias);
}

const returnPerson2 = ({ username: nombre, age, alias, rango = "Capitan" } ) => {
  console.log(nombre, age, alias, rango);
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useContext = ({ username: nombre, age, alias}) => {
  return {
    nombre,
    anios: age
  }
}

returnPerson(persona);

// const avenger = useContext(persona);
// console.log(avenger);
// const { nombre, anios } = useContext(persona);