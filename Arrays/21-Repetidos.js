//  eliminar eleentos deduplicados de un arreglo 

const listaAlumnos=["jacobo", "alma", "LaUra","jacobo","DieGo", "Leslie","Victor","Armando","Leslie", "Cesar","LaUra"];
/*
console.log(listaAlumnos);
const listaAlumnosUnicos = new Set(listaAlumnos);
console.log(listaAlumnosUnicos);

const listaAlumnosSinDuplicados = [...listaAlumnosUnicos]; 
console.log(listaAlumnosSinDuplicados);
*/

//  nuevo arreglo (SpredOperator)
const listaAlumnosUnicos = [...(new Set(listaAlumnos))];

console.log(listaAlumnosUnicos);

/*
{ } conjunto 

[ ]  arreglo 
 
*/

