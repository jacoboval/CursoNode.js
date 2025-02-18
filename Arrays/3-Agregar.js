const notas = [9,10,8];
let media = (notas[0] + notas[1] + notas[2] ) / notas.length;
//agragar nota al fnal
notas.push(5);

//agragar nota al inicio
notas.unshift(6);
console.log(notas.length);

console.log(notas);
console.log(media);

