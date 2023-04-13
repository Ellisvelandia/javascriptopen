// const logger = require("./logger/logger");
const moduloMatematicas = require("./modulos/matematicas");
// logger.info("Hoa esto es un mensjae informativo");
// logger.debug("Esto es un mensaje de debug");
// logger.warn("Esto es un mensaje de emergencia");
// logger.error("Esto es un mensaje de error");
const { suma, factorial, multiplica, eleva } = moduloMatematicas;

const fact = factorial(5);
console.log(fact);

const sum = suma(5, 10);
console.log(sum);


const mult = multiplica(5, 10);
console.log(mult);


const elv = eleva(5, 10);
console.log(elv);