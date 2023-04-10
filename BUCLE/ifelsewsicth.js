let saldo = 50;
let efectivo = 10;

if (efectivo < saldo) {
  console.log("Puedes casar dinero");
}

if (true) {
  console.log("verdadero");
} else {
  console.log("no es verdadero");
}

let nota = 3;

if (nota === 5) {
  console.log("Pasaste la asignatura");
} else if (nota < 5) {
  console.log("Le recesta a todos los santos");
} else {
  console.log("reprobaste");
}

switch (nota) {
  case 5:
    console.log("Pasaste la asignatura");

    break;
  case 4:
    console.log("Buen trabajo, pero podrias hacerlo mejor");

    break;
  case 3:
    console.log("Has obtenido un suficiente");

    break;
  case 2:
    console.log("NO pasaste la asignatura");

    break;
  default:
    console.log("No es un valor valido");
    break;
}
