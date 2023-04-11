//trabajar con metodos mas avanzados
// .map() .filter() .reduce()

const array = ["san sebastian", "colombia", "ibague", "bogota", "medellin"];

array.forEach((value) => {
  console.log(value);
});

const newArray = array.map((value, i) => {
  console.log(i);
  return `${i + 1} ${value}`;
});
console.log(newArray);

//filter()

const listaObjetos = [
  { nombre: "ellis", edad: 29 },
  { nombre: "crisanto", edad: 19 },
  { nombre: "mark", edad: 25 },
  { nombre: "tom", edad: 22 },
  { nombre: "travis", edad: 31 },
];
const personasM = listaObjetos.filter((obj) => {
  if (obj.edad > 30) {
    return true;
  } else {
    return false;
  }
});

console.log(personasM);

const personasMayores = listaObjetos.filter((obj) => obj.edad < 30);
console.log(personasMayores);

const nuevaLista = listaObjetos.filter((onj) => obj.nombre !== "travis");

console.log(nuevaLista);

//reduce
const valores = [3, 52, 80, 101, 200];

const suma = valores.reduce((anterior, actual, indice, arrayOriginal) => {
  console.log(anterior);
  console.log(actual);
  console.log(indice);
  console.log(arrayOriginal);

  return anterior + actual;
});

console.log(suma);
