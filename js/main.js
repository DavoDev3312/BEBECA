//Esto es un comentario > < 

function encuesta () {
   let respuesta = prompt("¿Qué te parece nuestro servicio hasta el momento? (responder con bien o mal)");
   if (respuesta == "Bien" || "bien") {
        alert("Nos da gusto que tu experiencia sea de calidad.");
   }else {
    alert("Ups, parece que debemos mejorar nuestro servicio de pago, agradecemos tu sinceridad")
   }
}

function servicioPago() {
    let servicio = prompt("¿Qué te parece nuestro servicio de pago? (responder con bien o mal)");
    if (servicio == "Bien" || "bien") {
        alert("Nos da gusto que tu experiencia sea de calidad, lo esperamos pronto.");
   } else {
    alert("Ups, parece que debemos mejorar nuestro servicio, agradecemos tu sinceridad")
   }
}

function totalCompra() {
    if(pesos > 10000){
        descuento = pesos * .20;
        total = pesos - descuento;
        alert("El total de tu compra junto con el descuento es de: " + total)
    } 
}

encuesta();

alert("NOTA: En la compra normal, por promoción, tenemos el 5% de descuento, si tu pago es mayor a 10 mil pesos, se te hará un descuento del 20% en tu compra total.");

let pesos = prompt("Ingresa la cantidad total de tu compra: ");
   let descuento = pesos * .05;
   let total = pesos - descuento;

alert("El total de tu compra es de " + total);

totalCompra();

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

servicioPago();

alert("Te mostraremos algunas sugerencias de productos que te pueden interesar.");

const productos = [
    {
        producto: "Carriola1",
        precio: "$4000",
        color: "blanca"
    },
    {
        producto: "Carriola2",
        precio: "$5,500",
        color: "negra"
    },
    {
        producto: "Carriola3",
        precio: "$4,500",
        color: "gris"
    },
];

for (let i = 0; i < productos.length; i++) {
    alert("Nombre: " + productos[i].producto);
    alert("Precio: " + productos[i].precio);
    alert("Color: " + productos[i].color);
    
}

alert("BEBETO, seguridad para ti y tu bebé.");
alert("¡Vuelva pronto!");