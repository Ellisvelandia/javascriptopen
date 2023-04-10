let input = "eScorpio";
let db = "escorpio";

console.log(input.toLowerCase());
console.log(db.toUpperCase());

let str_1 = "Hola soy la primera cadena";
let str_2 = "Hola soy la segunda cadena";

console.log(str_1.concat(" y ", str_2));
console.log(`${str_1} y ${str_2}`);

////Eliminar espacio al inicio y al final

let str_3 = "   Hola soy un string con espacios al final.  ";
console.log(str_3.length);
console.log(str_3.trim().length);
console.log(str_3.trimStart());

//Obtener el caracter que hay en cierta posicion

let str_4 = "Hola soy el string numero 4";
console.log(str_4.charAt());
console.log(str_4[16]);

//Obtener la posicion de una palabra dentro de una cadena de caracteres

let str_5 = "Hola soy ellis y me gusta el surf , ellis es grandioso";

console.log(str_5.indexOf("ellis"));
// console.log(str_5.charAt("9"));
console.log(str_5.lastIndexOf("ellis"));
