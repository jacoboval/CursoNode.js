const clientes = require('./clientes.json');

function filtarPorPais(lista,pais){
    return lista.filter((cliente) => cliente.direccion.pais=== pais)
}
const resultado = filtarPorPais(clientes, "Cuba")
console.log(resultado)

function filtarPorApartamento(lista,apartamento){
    return lista.filter((cliente) => cliente.direccion.apartamento === true)
}
const resultado2 = filtarPorApartamento(clientes, "true")
console.log(resultado2)