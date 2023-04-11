//trabajando con fechas

const fecha = new Date();

console.log(fecha);

const fecha2 = new Date(1999, 10, 20, 1, 23, 52, 192);

console.log(fecha2);

const fecha3 = new Date(100000000);

console.log(fecha3);

const fecha4 = new Date("may 21, 1993");
console.log(fecha4);

console.log(fecha < fecha2);

console.log(fecha2.getTime() === fecha.getTime());

//obtener el dia , el mes y el año de una fecha
console.log(fecha.getFullYear());
console.log(fecha.getMonth());
console.log(fecha.getDate());
console.log(fecha.toLocaleDateString());
