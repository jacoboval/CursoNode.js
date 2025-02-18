const cliente = 
{
    nombre : "Java",
    edad : 31,
    emain : "jvaðgmail.com",
    telefono : ["5578451256","5578451256"],
    dierccion :
    [
        {
        calle:  "Av Jalisco",
        numero : 22,
        Colonia : "Sn Pablo",
        cp : 45132,
        ciudad : "Tultitlan",
        estado : "Edo Mexico",
        privada : true        
        },
        {
            calle:  "Colima",
            numero : 2,
            Colonia : "Salinas",
            cp : 478956,
            ciudad : "Coacalco",
            estado : "Edo Mexico",
            privada : false        
        },
    ],
    saldo: 500,
    efectuarPago: function(valor)
    {
        if(valor < this.saldo){
            console.log("Realizar pago")
            this.saldo -= valor;
            console.log("Saldo actual", this.saldo)
        }else  
        console.log("Saldo Insuficiente")
    }
}     
cliente.efectuarPago(150)
