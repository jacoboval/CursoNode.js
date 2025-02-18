var base = 10;
var altura = 20;
var area = base * altura;
console.log(area);

//let ed de ambit local

{
    let num1 = 10;
    let num2  = 20;
    let suma = num1 + num2;
    {
        console.log(suma);
    }
    num1 = 50;
    suma = num1 + num2;
    console.log(suma);
}
//console.log(suma); 
//   esta fuera del ambityo local de la var suma
// por lo que marcará error
