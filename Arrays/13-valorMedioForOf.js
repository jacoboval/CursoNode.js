const listaNotas =[10,8,9,10,8,7,6,8,5,10,8,9];

let sumaNotas = 0 ;

for( let nota of listaNotas){
    //console.log(nota);
    sumaNotas += nota;
}
const valorMedio = sumaNotas / listaNotas.length;

console.log(`El valor de le media Aritm usando for of es: ${valorMedio.toFixed(3)}`);