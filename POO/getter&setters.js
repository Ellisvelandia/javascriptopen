class Persona {
  //private solo se puede acceder desde dentor las clases
  #nombre;

  //protected se puede acceder desde adentor y desde las clases decendientes
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludo() {
    console.log(`Hola mi nombre es ${this.nombre} , tengo ${this.edad} años`);
  }
  obtenNombre() {
    //funcion getter => nos permite accder de forma controlada a algun atributo
    return this.#nombre;
  }
}

const persona = new Persona("eyis", 29);
console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
persona.saludo();
// console.log(persona.obtenNombre());

//getter metodos que nos permites obtner atributos metodos privados o  protegidos

//setter metodos que nos permiten cambiar el valor de alguno de  los atributos provados o protegidos
