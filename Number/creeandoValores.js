// /operadores .valueOf()  - obtener valores numericos apartir de literales
let a = 2;

let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);

console.log(b.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());

//NAN  (Not a Number) infinity
let n = Number("adios");
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;

let divisor_2 = null;

console.log(divisor_2);
console.log(numerador / divisor);
console.log(Math.round(numerador / divisor));

//como convertir los string a valores numericos con Number , parseInt  y parseFloat

let numero = "5.89";
let num2 = 17.2;

console.log(typeof numero);
console.log(numero + num2);

console.log(typeof Number(numero));
console.log(Number(numero) + num2);

console.log(parseInt(numero));
console.log(parseFloat(numero));

//numeros hexadecimales
let numHex = "03x3a5b7";

console.log(parseInt(numHex, 10));

//obtener los valores maximos y minimos en javascript

let min_precision = Number.MIN_VALUE;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_EPSILON;

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);
