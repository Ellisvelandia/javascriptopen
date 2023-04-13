// const persona = {
//   nombre: "ellis",
//   edad: 29,
//   isDeveloper: true,
//   saludo: function () {
//     console.log("awesome");
//   },
// };

// console.log(persona);
// persona.saludo();

// const creaPersona = (nombre, edad, isDeveloper) => {
//   return {
//     nombre,
//     edad,
//     isDeveloper,
//     saludo: function () {
//       console.log("hello");
//     },
//   };
// };

// const nueva_persona = creaPersona("ellis", 23, true);
// const nueva_persona2 = creaPersona("cris", 29, true);
// console.log(nueva_persona);
// console.log(nueva_persona2);

//POO

// class Persona {
//   constructor(nombre, edad, isDeveloper, saludo) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.isDeveloper = isDeveloper;
//     this.saludo = saludo;
//   }
// }

// console.log(Persona)

class Persona {
  constructor(nombre, edad, isDeveloper) {
    this.nombre = nombre;
    this.edad = edad;
    this.isDeveloper = isDeveloper;
  }
  saludo() {
    console.log(`Hola mi nombre es ${hits.nombre} , tengo ${this.edad} años`);
  }
}

const new_persona = new Persona("ellis", 29, true);
console.log(new_persona);
new_persona.saludo()