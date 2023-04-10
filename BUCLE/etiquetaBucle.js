// let lista = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let i = 0; i < lista.length; i++) {
//   console.log(lista[i]);
//   if (lista[i] > 5) {
//     break;
//   }
// }

let unidades = 0;
let decenas = 0;

bucleDecenas: while (true) {
  bucleUnidades: while (true) {
    console.log(`El nunero actual es : ${decenas} ${unidades}`);
    unidades++;
    if (unidades === 4) {
      unidades = 0;
      break bucleUnidades;
    }
  }
  decenas++;
  if (decenas === 2) {
    break bucleDecenas;
  }
}

//cual es el ambito de un bucle
// console.log(i); is not defined
