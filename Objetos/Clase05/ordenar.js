const clientes = require('./clientes.json');

function ordenar(lista,propiead){
    return lista.sort((a,b) =>{
        if(a[propiead]< b[propiead]){
            return -1;
        }
        if(a[propiead] > b[propiead]){
            return 1;
        }
        return 0;
    })
}
const resultado = ordenar(clientes,"nombre");
console.log(resultado)

console.log("--------")

// ordenacion inversa
const resInverso = resultado.reverse();
console.log(resInverso);