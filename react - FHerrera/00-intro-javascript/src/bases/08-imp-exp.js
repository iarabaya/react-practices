import heroes, { owners } from "../data/heroes";

const getHeroeById2 = (id) => {
  return heroes.find( (heroe) => {
   if(heroe.id === id){
     return true;
   }else {
     return false;
   } 
  });
}

export const getHeroeById = (id) => {
  return heroes.find( heroe => heroe.id === id);
}

const getHeroeByOwner = (owner) => {
  return heroes.filter( heroe => heroe.owner === owner);
}

console.log(getHeroesByOwner('Marvel'));

