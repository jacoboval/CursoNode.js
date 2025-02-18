const listaAlumnos=["jacobo", "alma", "LaUra","anhel","DieGo", "Leslie","Victor","Armando", "Cesar"];
const listaNotas=[9,4,7,9,5,10,9,5,10];

//  primerro los pasamos a mayusculas
const alumnosCorregidos = listaAlumnos.map((alumnos)=>alumnos.toUpperCase());
  
/*
const listaAlumnosReprobados = alumnosCorregidos.filter((e,i)=>{
    if(listaNotas[i] < 6) // indice i de alumnos 
        return true;
});
*/

  //  liesa optimizadas
  //  llamada a callBack y por default el resultao es booelano,
  //  en este caso en true, para la condicion (reprobados) 
  const listaAlumnosReprobados = alumnosCorregidos.filter((e,i)=>listaNotas[i] < 6);  
  const listaAlumnosExcelencia = alumnosCorregidos.filter((e,i)=>listaNotas[i] ==  10);  
  const listaAlumnosRegulares  = alumnosCorregidos.filter((e,i)=>listaNotas[i] >=6  &&  listaNotas[i]< 10);  
  /*

  Cuando la función de callback devuelve true o verdadero, el elemento se agrega al arreglo 
  que se va a retornar y uando devuelve false o falso, el elemento se descarta.
  */
  
  


console.log(`Lista de alumnos No aprobados: ${listaAlumnosReprobados}`);
console.log(`Lista de alumnos No regulares: ${listaAlumnosRegulares}`);
console.log(`Lista de alumnos de Excelencia : ${listaAlumnosExcelencia}`);
