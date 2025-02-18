/*

desectructuraciopm de arreglos 

*/

const listAlunosYNotas = [["Irene","Sofis","Anhel","Rosario"],[10,9,10,8],["Ingles","Programacion","Fisica","Matematicas"],["Informatica","Administracion","Robotica","Arquitectura"]];


const [listAlunos,listaNotas,listamaterias,listaCarrrera] = listAlunosYNotas;
console.log(listAlunos);
console.log(listaNotas);
console.log(listamaterias);
console.log(listaCarrrera);

const nombreAlumno = `Sofis`;

if(listAlunos.includes(nombreAlumno)){
    console.log("Alumno encontrado");
    
    const posicionAlumno= listAlunos.indexOf(nombreAlumno);
    
    //console.log(posicionAlumno);
    const notaAlumno = listaNotas[posicionAlumno];
        
    const materiaAlumno = listamaterias[posicionAlumno];

    const carreraAlumno = listaCarrrera[posicionAlumno];

    
    console.log(`La calificacin del alumno ${nombreAlumno} es ${notaAlumno} de la meteria ${materiaAlumno}, carrera ${carreraAlumno}`);
    



}else{
    console.log("Alumno No encontrado");
}
