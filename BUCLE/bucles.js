// Bucles for
// for(inicializacion; condicion; actualizacion){

// }

// i = 1 + 1;
// i += 1;
// i++;

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12];
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i] * 2);
}

// estructura for of

for (let valor of lista) {
  console.log(valor);
}

// estructura forEach

lista.forEach((valor) => {
  console.log(valor);
});

// Estructura for in

let persona = {
  nombre: "ellis",
  apellido: "velandia",
  edad: 30,
  isDeveloper: true,
};

console.log(persona.nombre);

let prop = "edad";
console.log(persona[prop]);

for (let propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}

// while
let i = 0;
let max = 2;

while (i <= max) {
  console.log(i);
  i++;
}

// do while
i = 0;

do {
  console.log("estoy en el do while");
  i++;
} while (i < max);
