let fecha = new Date();
console.log(fecha);

let fechaNacimiento = new Date("21 may 1993");
console.log(fechaNacimiento);

const esMasTarde = fecha > fechaNacimiento;
console.log(esMasTarde);

let diaNaciemto = fechaNacimiento.getDate();
console.log(diaNaciemto);

let mesNaciemto = fechaNacimiento.getMonth();
console.log(mesNaciemto);

let anhoNaciemto = fechaNacimiento.getFullYear();
console.log(anhoNaciemto);
