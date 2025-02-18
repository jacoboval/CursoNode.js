const listaNotas =[10,8,9,10,8,7,6,8,5,10,8,9];

//  por cada elemto del arreglo, ejecyta la funsion
//  for each es de la calse array
let sumaNotas = 0;
listaNotas.forEach(function(nota,posicion){ //  callback
    sumaNotas += nota;
    console.log(posicion);
    //console.log(nota);
});
const valor = sumaNotas / listaNotas.length;
console.log(`Èl valor de lña media arit usano forEach es: ${valor.toFixed(3)}`);