// Funciones en JS
// function saludar ( nombre ) {
//     return `Hola ${nombre}`;
// }

// saludar = 30 te deja hacerlo aunque sea function

const saludar = function ( nombre ) {
    return `Hola ${nombre}`;
}

const saludar2 = ( nombre ) => {
    return `Hola ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola ${nombre}`;

saludar('Goku')

console.log(saludar)
console.log(saludar3('Vageta'))

// const getUser = () => {
//     return {
//         uid: 'ABC123',
//         username: 'iaruskis'
//     }
// }

const getUser = () => ({
        uid: 'ABC123',
        username: 'iaruskis'
    })


console.log(getUser())

// function getUsuarioActivo( nombre ) {
//     return {
//         uid:'ABC567',
//         username: nombre 
//     }
// };

const getUsuarioActivo = (nombre) => ({ uid: 'ABC567', username:nombre});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);