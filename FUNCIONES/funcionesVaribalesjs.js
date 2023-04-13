let name = "cris";

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

saludar(name);

let nombre_2 = "eyis";
console.log(nombre_2);

function despedir(nombre) {
  nombre = "ellisss";
  console.log(`Adios ${nombre}`);
}
despedir(nombre_2);

let persona = { nombre: "criss", apellido: "caicedo" };

function saludarPersona(objeto) {
  objeto.apellido = "Velandia";
  console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}
saludarPersona(persona);
console.log(persona);

//parametros opcionales con un valor por defecto

function imprimeNumero(numero = 7) {
  console.log(numero);
}

imprimeNumero();

function imprimir(...parametros) {
  console.log(parametros);
}

imprimir(1, 2, 3, 4, 5, 4, "ellis");

function suma(...nums) {
  return nums.reduce((a, b) => a + b);
}

const plus = suma(1, 2, 3, 4, 5, 50);

console.log(plus);

let variable = "crisanto";

function multiplicar(a = 0, b = 0) {
  console.log(variable);
  let variable_interna = "adios";
  console.log(variable_interna);
  return a * b;
}

console.log(multiplicar(4, 9));
