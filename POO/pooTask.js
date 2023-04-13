class Estudiante {
  constructor(nombre) {
    this.nombre = nombre;
    this.asignaturas = ["Javascript", "HTML", "CSS"];
  }

  obtenDatos() {
    return {
      nombre: this.nombre,
      asignaturas: this.asignaturas,
    };
  }
}

const estudiante1 = new Estudiante("ellis");
console.log(estudiante1.obtenDatos()); // { nombre: 'Juan', asignaturas: [ 'Javascript', 'HTML', 'CSS' ] }
