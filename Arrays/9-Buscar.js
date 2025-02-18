const listAlunosYNotas = [["Irene","Sofis","Anhel","Rosario"],[10,9,10,8],["Ingles","Programacion","Fisica","Matematicas"],["Informatica","Administracion","Robotica","Arquitectura"]];

const nombreAlumno = `Sofis`;

if(listAlunosYNotas[0].includes(nombreAlumno)){
    console.log("Alumno encontrado");
    
    const posicionAlumno= listAlunosYNotas[0].indexOf(nombreAlumno);
    
    //console.log(posicionAlumno);
    const notaAlumno = listAlunosYNotas[1][posicionAlumno];
    
    const materiaAlumno = listAlunosYNotas[2][posicionAlumno];

    const carreraAlumno = listAlunosYNotas[3][posicionAlumno];

    
    console.log(`La calificacin del alumno ${nombreAlumno} es ${notaAlumno} de la meteria ${materiaAlumno}, carrera ${carreraAlumno}`);
    



}else{
    console.log("Alumno No encontrado");
}
