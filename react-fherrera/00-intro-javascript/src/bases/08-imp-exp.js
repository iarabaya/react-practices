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

export const getHeroById = (id) => {
  return heroes.find( heroe => heroe.id === id);
}

export const getHeroesByOwner = (owner) => {
  return heroes.filter( heroe => heroe.owner === owner);
}

console.log(getHeroesByOwner('Marvel'));

