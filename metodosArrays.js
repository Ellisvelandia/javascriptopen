//como trabajar con listas (array, arreglos, vectores)
// mutan valor del array

let var1 = 45;

let array = [1, "ellis", true, null, undefined, var1];

console.log(array);

//metodos para introducir nuevos valores en nuestros arrays

array.push("velandia", 4, false);

console.log(array);

// intriducir nuevos valores al principio de un array

array.unshift("hello");

console.log(array);

//metodos para eliminar valores en nuestro array pop , shift

array.pop();

console.log(array);

array.shift();

console.log(array);

//metodo para eliminar . modificar o añadir valores en nuestro array
// .splie

const array2 = [1, 2, 3, 4, 5, 6];

//elimina valores .splice (indice, numValoresAEliminar)

array2.splice(0, 1);
console.log(array2);

//añadir valores .splice(indices, 0 , valores)

array2.splice(2, 0, "hola", 3);
console.log(array2);

//Modificar valores .splie(indice, 1, valores)
array2.splice(2, 1, 3);

console.log(array2);
