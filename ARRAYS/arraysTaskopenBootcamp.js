// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

let compra = ["cafe", "pan", "leche", "maiz", "huevos"];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

compra.unshift("Aceite de Girasol");
console.log(compra);
// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compra.shift();
console.log(compra);
// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculasFavoritas = [
  { titulo: "marvel", director: "ellis velandia", fecha: 2023 },
  { titulo: "happy code", director: "crisanto", fecha: 2030 },
  { titulo: "millonario", director: "eyis", fecha: 2005 },
];
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const Fecha = peliculasFavoritas.filter((value) => value.fecha < 2010);
console.log(Fecha);
// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculasFavoritas.map((value) => value.director);
console.log(directores);
// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculasFavoritas.map((value) => value.titulo);
console.log(titulos);
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const concat = directores.concat(titulos);
console.log(concat);
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listapropagacion = [...titulos, ...directores];
console.log(listapropagacion);
