const alumnos=["jacobo", "alma", "LaUra","anhel","DieGo"];

/*
const alumnosCorregisod = alumnos.map(
    (alumnos)=>{
        return alumnos.toUpperCase();
    });*/

    // codigo optimizado
    const alumnosCorregisod = alumnos.map((alumnos)=>alumnos.toUpperCase());
    console.log(alumnosCorregisod)

    console.log("----------")
    console.log("Obtener la ubicacion")  

    const alumnosCorregiso2 = alumnos.map((alumnos ,i) => {
        console.log(i);
        return alumnos.toUpperCase()
    });
    console.log(alumnosCorregisod)
    console.log("----------")
    const nombreDelCurso = "Fundamentos de JS";
const nombreDeLaPlataforma = " Alura"

const nombreCompleto = nombreDelCurso .concat(nombreDeLaPlataforma)
console.log(nombreCompleto)  //Fundamentos de JS Alura
