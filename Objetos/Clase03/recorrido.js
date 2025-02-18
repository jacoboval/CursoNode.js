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
for(let llave in cliente ){
    let tipo = typeof cliente[llave]
    if(tipo !== "object" && tipo !== "function"){
        console.log(`La llave ${llave} tiene el valor ${cliente[llave]}`)
    }
    //console.log(cliente[dierccion.Colonia])
           
}

