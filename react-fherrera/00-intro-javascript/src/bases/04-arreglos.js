// const arreglo = new Array(10);
const arreglo = [1,2,3,4];
// arreglo.push(1); no recomendado

// let arreglo2 = arreglo;
let arreglo2 = [...arreglo, 5];
const arreglo3 = arreglo2.map( arr => arr * 2)

arreglo2.push(5);

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );