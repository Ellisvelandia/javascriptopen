const datosPersonales = {
  nombre: "ellis",
  apellido: "caicedo",
  edad: 29,
  altura: 1.8,
  eresDesarrollador: true,
};

const miEdad = datosPersonales.edad;
console.log(miEdad);

const listaDeAmigos = [
  datosPersonales,
  {
    nombre: "Laura",
    apellido: "Gómez",
    edad: 26,
    altura: 1.65,
    eresDesarrollador: false,
  },
  {
    nombre: "Pedro",
    apellido: "García",
    edad: 30,
    altura: 1.75,
    eresDesarrollador: true,
  },
];

console.log(listaDeAmigos);

const orden = listaDeAmigos.sort((a, b) => a.edad - b.edad);
console.log(orden);
