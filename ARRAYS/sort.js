//sort()

const array = [2, 5, 4, 7, 1, 6, 11, 3, 10];

array.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return +1;
  } else {
    return 0;
  }
});

console.log(array);

const arrayNumerico = [40, 10, 7, 4, 55, 152];

arrayNumerico.sort((a, b) => b - a);

console.log(arrayNumerico);

//Interesante en arrays de objetos

const listaObjetos = [
  { nombre: "ellis", edad: 29 },
  { nombre: "crisanto", edad: 19 },
  { nombre: "mark", edad: 25 },
  { nombre: "tom", edad: 22 },
  { nombre: "travis", edad: 31 },
];

//Ordenar objetos de menor a mayor

listaObjetos.sort((a, b) => {
  if (a.edad < b.edad) {
    return -1;
  } else if (a.edad > b.edad) {
    return +1;
  } else {
    return 0;
  }
});

console.log(listaObjetos);

listaObjetos.sort((a, b) => a.edad - b.edad);

console.log(listaObjetos);
