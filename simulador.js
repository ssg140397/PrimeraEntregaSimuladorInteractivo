//Primera entrega: Proyecto de cotizador/ servicio de atencion al cliente de seguros y productos financieros inspirados en las atenciones de servicio por chatbox o wp. 

let nombre = prompt ("Ingrese su nombre")
Bienvenido ();

function Bienvenido() { alert( "Bienvenido" + " " + nombre + " " + "¿En que podemos ayudarte el día de hoy?")
OpcionesEscoger ()
}

function OpcionesEscoger() {
let opciones = prompt ("Elije una opción: \n 1: Quiero cotizar un seguro vehicular \n 2: Quiero cotizar un seguro EPS \n 3:Calcula tu plan de Ahorros \n 4: Quiero asistencia, tuve un siniestro");

if (opciones ==="1"){
    QuieroCotizarunSeguroVehicular()
} 
else if (opciones === "2") {
    QuieroCotizarunSeguroEPS ()
}
else if(opciones ==="3"){
    CalculatuPlandeAhorros ()
}
else if (opciones === "4"){
    let numero = Number(prompt ("Ingresa tu numero telefónico"))
    alert ("¡No te preocupes, la ayuda va en camino!, uno de nuestros agentes se pondrá en contacto contigo")
    console.log(`Contactar urgentemente por siniestro:${numero}`)
}
else {
    alert (`Por favor, ingresar una opción valida`)
    OpcionesEscoger ()
}

}


function QuieroCotizarunSeguroVehicular (seguroVehicular) {
    let nroDNI = prompt ("Ingresa tu numero de DNI")
    let nroTelefonico = Number (prompt ("Ingresa tu numero telefónico"))
    let precioCarro = Number (prompt ("Ingresa el valor de tu vehiculo"))
    let TazaPrima = 0.5*1000
    let ResultadoSeguro= precioCarro/TazaPrima;
    console.log(`El usuario cuenta con un plan de ${ResultadoSeguro} dólares. Proceder con agenciamiento al ${nroTelefonico}`)
    return alert (`¡Cotización finalizada! La prima trimestral que le correspondería sería de ${ResultadoSeguro} dólares ¡En breves uno de nuestros agentes se estará contactando contigo!`)
}

function QuieroCotizarunSeguroEPS (){
    let DNI = prompt ("Ingrese su numero de DNI")
    let nroTelefonico = prompt ("Ingrese su numero telefónico")
    let edad = Number (prompt ("Ingrese su edad"))
    let monto = prompt ("Ingrese el monto que desea cancelar mensualmente")
    
    if (monto <= 50){
        alert ("El monto ingresado no es suficiente para cubrir un plan")
        QuieroCotizarunSeguroEPS ()
    } else {
        ResultadoAnual = monto * 12
        console.log(`El cliente cuenta con un plan anual de ${ResultadoAnual}, proceder con agenciamiento al ${nroTelefonico}`)
        alert(`¡Felicidades! Usted califica para un plan anual de ${ResultadoAnual} dólares. En breves uno de nuestros agentes se estará comunicando con usted `)
    }

}

function CalculatuPlandeAhorros () {
    let nroTel = Number (prompt ("Ingrese su numero telefónico"))
    let fondoMensual = Number ( prompt ("Ingrese el monto que desea ahorrar mensualmente"))
    let tiempodeAhorro = Number (prompt ("Ingrese el tiempo que desea ahorrar"))

    console.log(`Llamar al ${nroTel} para venta de plazos fijos`)

    for (let i = 1; i <= tiempodeAhorro; i++) {
        let resultadoA = fondoMensual * i;
        alert (`${fondoMensual} x ${i} = ${resultadoA}`);

    }
    alert (`¡Te ofrecemos planes de hasta 8% de intereses anuales de plazo fijo! En unos momentos nuestros agentes se estarán comunicando contigo para darte más detalles`)
}
