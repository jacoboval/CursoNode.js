/*
Splice afecta el arreglo original

splice permite eliminar y agragar elementos

*/
const listAlumnos = ["alma","Layla","Patricia","Aurora","Irene","Sofis","Anhel","Rosario"];

console.log(listAlumnos);


listAlumnos.splice(1,3,"Carmen","Grecia");
console.log(listAlumnos);

listAlumnos.splice(1,0);
console.log(listAlumnos);