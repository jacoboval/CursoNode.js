// conver implicita
const edad = 39;
//const edaduser= "39";
const edaduser= "39s";
console.log(edad + edaduser);




// conver explicita
console.log(edad + Number(edaduser));
console.log(String(edad) + edaduser);
console.log(edad.toString + edaduser);
