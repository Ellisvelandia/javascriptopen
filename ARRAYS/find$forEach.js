//iterar los valores de una lista

const array = ["hola", 1, 2, 3, 4, false];

//forma antigua (poco eficiente)
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//forma ES6 .forEach()

let suma = 0;

const arrayNums = [3, 5, 4, 7, 8, 6, 5, 71, 80];

arrayNums.forEach((valor) => {
  suma += valor;
  console.log(valor);
});

console.log(suma);

//Busqueda de un valor dentro de una lista .find()
const variable = arrayNums.find((value) => {
  if (value === 71) {
    return true;
  }
});

console.log(variable);

const listaObjetos = [
  { nombre: "ellis", edad: 29 },
  { nombre: "crisanto", edad: 19 },
  { nombre: "mark", edad: 25 },
  { nombre: "tom", edad: 22 },
  { nombre: "travis", edad: 31 },
];

const objeto = listaObjetos.find((value) => value.nombre === "ellis");

console.log(objeto.edad);

const { edad } = listaObjetos.find((value) => value.nombre === "mark");
console.log(edad);

const { nombre } = listaObjetos.find((value) => value.edad === 31);
console.log(nombre);
