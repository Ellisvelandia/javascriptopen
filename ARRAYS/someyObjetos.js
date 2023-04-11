//some() si algunos elementos cumplen una condicion

const array = [3, 4, 5, 2, 6, 5, 7, 1, 44, 222];

const res = array.some((valor) => valor < 0);

console.log(res);

const existe = array.some((valor) => valor === 44);

console.log(existe);

const listaObjetos = [
  { nombre: "ellis", edad: 29 },
  { nombre: "crisanto", edad: 19 },
  { nombre: "mark", edad: 25 },
  { nombre: "tom", edad: 22 },
  { nombre: "travis", edad: 31 },
];

const existeNombre = listaObjetos.some((persona) => persona.nombre === "ellis");

console.log(existeNombre);

//como obtener una lista a partir de un objeto iterable

const str1 = "Hola soy ellis";
console.log(str1);

const ar_str = Array.from(str1);
console.log(ar_str);

const set = new Set([2, 3, "hola", 4]);
const ar_set = Array.from(set);
console.log(ar_set);

const keys = array.keys();
console.log(keys);

const ar_Keys = Array.from(keys);
console.log(ar_Keys);
