//trabajamos con objetos

const obj = {
  id: 4,
  nombre: "ellis",
  apellido: "velandia",
  isDeveloper: true,
  libros_favoritos: ["el metodo", "el codigo de las manifestaciones"],
  "4-juegos": [1, 2, 3, 4],
};

console.log(obj["4-juegos"][0]);
console.log(obj.nombre);

const obj2 = obj;
obj2.apellido = "caicedo";

console.log(obj.apellido);

//como ordenar lista de objetos en funciona de una propiedad

const listaPeliculas = [
  {
    titulo: "lo que el viento se llevo",
    año: 1939,
  },
  {
    titulo: "Titanic",
    año: 1997,
  },
  {
    titulo: "Moana",
    año: 2016,
  },
  {
    titulo: "el efecto mariposa",
    año: 2004,
  },
  {
    titulo: "Ted",
    año: 2012,
  },
];

console.log(listaPeliculas);

listaPeliculas.sort((a, b) => a.año - b.año);

console.log(listaPeliculas);

listaPeliculas.sort((a, b) => a.titulo - b.titulo);
console.log(listaPeliculas);
