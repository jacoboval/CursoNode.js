const objCliente ={
    nombre: "jacobo",
    tipo: "A",
    email: "jacobo@gmail.com"
}

const cliente2 = objCliente;
cliente2.nombre = "Samuel";
console.log(objCliente.nombre)

console.log(cliente2.nombre);

//  copiar objeto para  modificar 
// le referencia a memoria

const cliente3 =Object.create(objCliente);
cliente3.nombre = "Salma";
console.log(cliente2.nombre);
console.log(cliente3.nombre);



