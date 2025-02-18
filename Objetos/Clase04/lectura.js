//AluraLatam\RutaNode.js\Cursos\Objetos\Clase04
//const datos = require("\cliente.json")
const datos = require('./c.json');
//const datos = 46;
console.log(datos)
console.log(typeof datos)


//JSON.stringgify() JSON.parse()

//stringgify() recibe un objeto y tranforma en txt
const datosString  = JSON.stringify(datos);

console.log(datosString)
console.log(typeof datosString);

//n tranformar un txt en un objeto

const datosObj = JSON.parse(datosString);
console.log(datosObj)
console.log(typeof datosObj);