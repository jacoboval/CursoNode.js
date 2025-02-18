const listAlunos = ["Irene","Sofis","Anhel","Rosario"];
const listaNotas = [10,9,10,8];
const listaMaterias = ["Programacion","Ingles","Fisica","Matematicas"];
const listaProf =["Ing.Raul","CP.Anhel","Doctor.Daniel"];

//console.log(listAlunos);
//console.log(listaNotas);

const listsUnificada =[listAlunos,listaNotas,listaMaterias,listaProf];

console.log(listsUnificada);

console.log(listsUnificada[3][1]);

console.log (`La calificación de ${listsUnificada[0][3]} es de ${listsUnificada[1][3]} , de la Materia de ${listsUnificada[2][0]}, con el profesor ${listsUnificada[3][0]}`);