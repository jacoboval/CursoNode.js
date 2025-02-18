const notasIniciales = [8,10,9,8,5,6,10,7,8,8,4,6];

//  el cambio impactara en abos arreglos, se pasa la referencia
//const copiaDenotasIniciales = notasIniciales;

//con esta notacion se crea en memoria otro arreglo (se clona)
//  spread operator…
const copiaDenotasIniciales = [...notasIniciales];


copiaDenotasIniciales.push(10);
copiaDenotasIniciales.push(15);
copiaDenotasIniciales.push(13);

console.log(notasIniciales);
console.log(copiaDenotasIniciales);

//  se aplica 

console.log("para saber mas");

let num1 = 10;
let num2 = num1;

num2 += 5;
num1 += 1;

console.log(`Num1 es ${num1}. Num2 es ${num2}`);
//asignación por valor y solo ocurre con los tipos primitivos de JavaScript.
console.log("asignación por valor y solo ocurre con los tipos primitivos de JavaScript.");