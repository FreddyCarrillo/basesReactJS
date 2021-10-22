let nombre = 'Freddy';
let soltero = true;

let datos = [
    {
        nombre,
        soltero,
        edad: 23,
        lenguajes: [
            'php',
            'javascript',
            'java',
        ]
    },
    {}
]

// console.log('nombre',typeof nombre);
// console.log('soltero', typeof soltero);
// console.log('datos', typeof datos);
// console.log('datos', typeof datos[0].lenguajes);

//ternario 

const verificarMayorDeEdad = (edad) => {
    let result;
    (edad > 18)
        ? result = 'es mayor de edad'
        : result = 'es menor de edad';
    return result;
}

console.log(verificarMayorDeEdad(13));

// arrays 
// DOM 
// Events
// LocalStorage
// async and await
// fetch , ajax with axios
// import and export
// npm and yarn

// CSS, grid, contenedores de cajas, colores, borders, fonts, SASS

// react 
// jsx 
// hooks 
// custom hooks 
// navegacion 
// importacion de librerias
// redux
// consumir API 
// Material UI 
// SASS 

// hooks 

// laravel 
// nodejs with express
// springboot 


