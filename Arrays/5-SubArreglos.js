/*
El método slice() devuelve una copia de una parte del array dentro de
un nuevo array empezando por inicio hasta fin (fin no incluido). 
El array original no se modificará.
*/

const listAlumnos = ["alma","Layla","Patricia","Aurora","Irene","Sofis","Anhel","Rosario"];

const grupoA = listAlumnos.slice(0, 4);
const grupoB = listAlumnos.slice(4, 8);

console.log(grupoA);
console.log(grupoB);

console.log(listAlumnos);