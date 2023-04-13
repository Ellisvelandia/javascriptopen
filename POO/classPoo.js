class Persona {
  constructor(nombre, edad, isDeveloper) {
    this.nombre = nombre;
    this.edad = edad;
    this.isDeveloper = isDeveloper;
  }
  saludo() {
    console.log(`Hola mi nombre es ${this.nombre} , tengo ${this.edad} años`);
  }
}

const new_persona = new Persona("ellis", 29, true);
console.log(new_persona);
new_persona.saludo();

let numero = 60;
let persona_2 = new Persona("cris", 28, true);
console.log(persona_2 instanceof Persona);
