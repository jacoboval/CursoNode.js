const listaNotas =[10,8,9,10,8,7,6,8,5,10,8,9];
let sumaNotas = 0 ;
for(let i = 0; i<listaNotas.length; i++){
    //console.log(listaNotas[i]);
    sumaNotas += listaNotas[i];
}
console.log(sumaNotas);

const mediaAritmetica = sumaNotas/listaNotas.length;
console.log (`Wl Valor de la MA de la lista es: ${mediaAritmetica.toFixed(3)}`)