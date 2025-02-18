const listaNombres =[ "Jacobo","Leslie","Abril"];

//  fincio anonima como arg
/*
listaNombres.forEach(function(nombre){
    console.log(nombre);
})*/

//console.log("--------------");
//  funcion arrow 

/*
listaNombres.forEach((nombre) => {
    console.log(nombre);

});*/

//listaNombres.forEach((nombre) => console.log(nombre));

//  declaracin de funcion 

function imprimeNombres(nombre){
    console.log(nombre);

}
listaNombres.forEach(imprimeNombres);

