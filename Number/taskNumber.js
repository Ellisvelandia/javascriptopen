// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga tu altura en centímetros (entero)

let altura = 180;
// - Una variable que contenga tu altura en metros (número de coma flotante)

let alturaFlotante = 1.8;
// - Una variable que contenga tu peso en kilogramos (número de coma flotante)

let pesokg = 85.5;
// - Una variable que contenga tu altura en metros redondeada hacia arriba
let pesoRedondeado = Math.ceil(pesokg);

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoFloor = Math.floor(pesokg);

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
const maxValorJS = Number.MAX_SAFE_INTEGER + 1;
const esMaximo = maxValorJS === Number.MAX_VALUE;

console.log(pesoRedondeado);
console.log(pesoFloor);
