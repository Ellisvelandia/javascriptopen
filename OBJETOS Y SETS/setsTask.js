// Set original con los nombres de tu familia
const nombresFamilia = new Set(["elsa", "María", "Pedro", "Ana", "Lucas"]);

// Nuevo Set con los nombres de tu familia
const nombresFamiliaNuevo = new Set(["Juan", "María", "Pedro", "Ana", "Lucas"]);

// Añadiendo tu nombre (duplicado)
nombresFamiliaNuevo.add("ellis");
nombresFamiliaNuevo.add("ellis");
console.log(nombresFamiliaNuevo);
// Añadiendo el nombre "Javascript"
nombresFamiliaNuevo.add("Javascript");
console.log(nombresFamiliaNuevo);
