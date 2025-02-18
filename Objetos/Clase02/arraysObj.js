const cliente = {
    nombre : "Jasva",
    edad : 31,
    emain : "jvaðgmail.com",
    telefono : ["5578451256","5578451256"],
    dierccion : [
        {
        calle:  "Av Jalisco",
        numero : 22,
        Colonia : "Sn Pablo",
        cp : 45132,
        ciudad : "Tultitlan",
        estado : "Edo Mexico",
        privada : true        
        },
        {
            calle:  "Colima",
            numero : 2,
            Colonia : "Salinas",
            cp : 478956,
            ciudad : "Coacalco",
            estado : "Edo Mexico",
            privada : false        
            }
]
}
//console.log(cliente.dierccion[1]);
const listaSoloPriv = cliente.dierccion.filter((direccion)=>direccion.privada === false)
console.log(listaSoloPriv);