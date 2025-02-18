const notas = [10,8,9,2,3,1,6];
const notasActualizadas = notas.map((nota) =>{
    return notanueva = (nota / 2) < 3 ? 3 : (nota/2);  // if ternario
    //return notanueva;

    

    /*
    if(notanueva <= 3)
        notanueva = 3;
    */

});

console.log(notasActualizadas);