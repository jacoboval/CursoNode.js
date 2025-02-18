const producto = {
    nombre : "jitomate",
    clasifi :"verduras",
    proced : "nacional",
    cantidad: 10
}

console.log(producto.proced);
console.log(producto.clasifi);

console.log(`
    Nombre: ${producto.nombre.toLocaleUpperCase()}
    Clasificación : ${producto.clasifi}
    Procedencia : ${producto.proced}
    Cantiad : ${producto.cantidad}    
    `);

    const llaves = ["marca", "color","procesador"]
    const telefono ={
        marca: "Samsung",
        color: "rojo;",
        procesador: "core2"
    }
    llaves.forEach((llave)=>{
        console.log(`
            La llave: ${llave}
            tiene el valor ${telefono[llave]} 
            `)

    })