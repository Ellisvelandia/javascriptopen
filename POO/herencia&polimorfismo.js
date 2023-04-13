//Herencia
class Persona {
  _nombre;
  _edad;
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }
  saludo() {
    console.log(`Hola mi nombre es ${this._nombre} , tengo ${this._edad} años`);
  }
}

class Desarrollador extends Persona {
  constructor(nombre, edad, lenguaje) {
    super(nombre, edad);
    this.lenguaje = lenguaje;
  }
  saludo() {
    // / anular override
    super.saludo(); // hereda saludo
    console.log(`y soy un desarrollador ${this.lenguaje}`);
  }
}

const nuevoDev = new Desarrollador("ellis", 20, "javascript");
console.log(nuevoDev);
nuevoDev.saludo();

//Polimofirmo => varias formas
