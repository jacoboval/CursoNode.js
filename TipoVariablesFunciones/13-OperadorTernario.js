const edadUsuario = 55;
const edadPermitida = 20;

/*if(edadUsuario >= edadPermitida){
    console.log("Venta habilitada");
}else{
    console.log("Prohibia la venta");
}*/
(edadUsuario >=  edadPermitida) ? console.log("Venta habilitada") : console.log("prohibida la Venta");

const nombre = "Jacobo";
const edad = 25;
const bebidaMayorEdad= "Vino";
const bebidaMenorEdad = "jugo"; 

const pedido = `${nombre} dice: "Por favor, quiero beber ${edad >= 18 ? bebidaMayorEdad : bebidaMenorEdad}"`
console.log (pedido);



