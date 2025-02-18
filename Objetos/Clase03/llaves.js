const cliente = {
    nombre : "Java",
    edad : 31,
    emain : "jvaðgmail.com",
    telefono : ["5578451256","5578451256"],
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
//  se genera un nuevo arreglo de llaves 
//  [ 'nombre', 'edad', 'emain', 'telefono', 'dierccion' ]
const llavesDelObject = Object.keys(cliente)
console.log(llavesDelObject)
if(!llavesDelObject.includes("diercion")){
    console.log("Error, es necesario teneruna direccion ")

}