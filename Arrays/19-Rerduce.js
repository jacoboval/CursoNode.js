const listaSecA = [8,7,8,9,6,10,8,7];
const listaSecB = [8,10,9,8,5,6,10,7,8,8,4,6];
const listaSecC = [6,7,8,4,10,6,7,8];

/*
const suma = listaSecA.reduce((prev,act)=>{
    return prev + act;

},0) // segundo parametro ,0  valor inicial de la operacion 
*/

//  optimizacion
const suma = listaSecA.reduce((prev,act)=> prev + act,0); 

//  con funcion

const sumaSeccion = (lista) => {
    return lista.reduce((prev,act)=> prev + act,0); 
}



valorMedia =( sumaSeccion(listaSecA) + sumaSeccion(listaSecB) + sumaSeccion(listaSecC))
              / (listaSecA.length + listaSecB.length + listaSecC.length);


//const valorMedia = sumaTotal / totalElementos;

console.log(`èl valor de la media de las tres secciones es: ${valorMedia.toFixed(2)}`);