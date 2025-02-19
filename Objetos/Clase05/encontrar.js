const clientes = require('./clientes.json');
//console.log(clientes.length);

function encontrar(lista,llave,valor){
    //return lista.find((cliente) => cliente[llave]=== valor);
    return lista.find((cliente) => cliente[llave].includes(valor))

}
const resultado = encontrar(clientes, "email", "mariana@gmail.com")

// para la buscqueda dentro de un arrerglo , debemos agragar include en la funcion para ingresar
// a lso elementos del arreglo   
const resultado2 = encontrar(clientes, "telefonos", "54 8563 0562")
console.log(resultado)

//  pendiente para la busqueda de tipo de dato enteros 
//const resultado3 = encontrar(clientes, "edad", 31)
console.log(resultado2)

// busqueda dentro de un arreglo 
//const resultado3 = encontrar(clientes, "calle", "Avenida Hipolito Yrigoyen")
//console.log(resultado3)