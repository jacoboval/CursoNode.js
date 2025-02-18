const cliente = {
    nombre : "Java",
    edad : 31,
    emain : "jvaðgmail.com",
    telefono : ["5578451256","457851212"],
    dierccion :{
        calle:  "Av Jalisco",
        numero : 22,
        Colonia : "Sn Pablo",
        cp : 45132,
        ciudad : "Tultitlan",
        estado : "Edo Mexico",
        privada : true        
    }   
}  

function llamarCliente(telefonoUno,telefonoDos){
    console.log(`llamando a ${telefonoUno}`);
    console.log(`llamando a ${telefonoDos}`);

}
//llamarCliente(cliente.telefono[0],cliente.telefono[1])

//  Spread Operator
llamarCliente(...cliente.telefono)

const pedido = {
    cliente : cliente.nombre,
    ...cliente.dierccion
}
console.log(pedido)