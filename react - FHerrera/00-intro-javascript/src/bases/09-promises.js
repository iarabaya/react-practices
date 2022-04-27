import { getHeroeById } from "./08-imp-exp";

const getHeroeByIdAsync = (id) =>{

  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      const heroe = getHeroeById(id);
      // console.log('2 segundos despues');
      // console.log(heroe);
      if(heroe){
        resolve(heroe);
      }else{
        reject('No se pudo encontrar el heroe')
      }
    }, 2000)

  });

}

// getHeroeByIdAsync(4)
// .then( (res) =>{ console.log('Then de la promesa: ', res); })
// .catch(err => console.warn(err))
// .finally( console.log('se acabo la funcion') );

getHeroeByIdAsync(4)
.then( console.log )
.catch( console.warn )
.finally( console.log('se acabo la funcion') );
