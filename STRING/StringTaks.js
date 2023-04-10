// - Una cadena de texto con tu Nombre
let nombre = "ellis";

// - Otra cadena de texto con tu Apellido
let apellido = "velandia";

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}`;
estudiante.toUpperCase();
console.log(estudiante.toUpperCase());
// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

let estudianteMayus = estudiante;
estudiante.toLowerCase();
console.log(estudiante);
// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante;
// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let caracterEstudiante = estudiante.length;
console.log(caracterEstudiante);
// - Una variable que contenga la primera letra del Nombre
let nombrePrimeraLetra = nombre.slice(0, 1);
console.log(nombrePrimeraLetra);
// - Otra variable que contenga la última letra del Apellido
let nombreUltimaLetra = nombre.slice(-1);
console.log(nombreUltimaLetra);
// - Una cadena de texto que elimine los espacios de la variable "estudiante"
let eliminarEspacio = estudiante.trim();
console.log(eliminarEspacio);
// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let revisarSi = estudiante.includes("ellis");
console.log(revisarSi);
