//como podemos comparar listas
//every()

const array = [4, 2, 5, 8, 7, -4, -7, -8, -2];

const resultado = array.every((value) => {
  if (typeof value === "number") {
    return true;
  } else {
    return false;
  }
});

console.log(resultado);

const resultados = array.every((valor) => valor > 0);
console.log(resultados);

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];

console.log(arr1 === arr2);
