//como obtener una lista a partir de otra .slice()
//no modifica el valor del array original

const array = ["hola", 1, 2, 3, 4, 5, "ellis"];

console.log(array.slice(1, 3));
const array2 = array.slice(2, 5);

console.log(array2);

const array3 = array.slice(2, -2);
console.log(array3);
