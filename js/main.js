//Esto es un comentario > < 

alert("NOTA: En la compra normal, por promoción, tenemos el 5% de descuento, si tu pago es mayor a 10 mil pesos, se te hará un descuento del 20% en tu compra total.");

let pesos = prompt("Ingresa la cantidad total de tu compra: ");
   let descuento = pesos * .05;
   let total = pesos - descuento;

alert("El total de tu compra es de " + total);

if(pesos > 10000){
    descuento = pesos * .20;
    total = pesos - descuento;
    alert("El total de tu compra junto con el descuento es de: " + total)
} 

while (pesos < 10000) {
    alert("Recuerda que si tu total es mayor a 10 mil tenemos el 20% de decuento");
    break;
}

let experiencia = prompt("Le gustó la experiencia comprando con BEBECA")
switch (experiencia) {
    case "Si":
    alert("Lo esperamos pronto, estamos a su servicio y al de su bebé");
        break;

    case "No":
    alert("Lamentamos mucho la experiencia que tuvo, ayudenos a expresar su inconformidad");
    prompt();
    alert("Gracias por su honestidad, como empresa buscamos lo mejor para nuestros clientes");
        break;

    default:
        break;
}





