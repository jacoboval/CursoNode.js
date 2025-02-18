function  sumaYPorcentaje(a, b){
    let c = a + b;
    c *= 10/100;
    function mult(a,b){
        return a * b;
    }
    return c * mult(a,b); 
}


const num1 = sumaYPorcentaje(5,10);
console,console.log(num1);
const num2 = sumaYPorcentaje(50,95);
console,console.log(num2);


