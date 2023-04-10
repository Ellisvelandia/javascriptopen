let str = "Hola soy un string";

console.log(str.length);

//obteber partes de cadenas de caracteres

let slice_str = str.slice(0, 5);
let substring_str = str.substring(0, 5);

console.log(slice_str);
console.log(substring_str);

//remplaza parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es ellis";

console.log(cadena);

// / solo remplaza la primera instancia

console.log(cadena.replace("ellis", "ellis velandia"));

let texto_largo =
  "ellis trabaja muy duro aprendiendo javascript por ese motivo tendra un excelente trabajo como programador javascript";

console.log(texto_largo.replace("tendra", "tiene"));

//Al utlizar la expresion regular global remplaza todas las instancias

console.log(texto_largo.replace(/javascript/g, "full stack"));

//convertir toda la candena de texto en mayusculas o minusculas
console.log(texto_largo.toLocaleUpperCase());
console.log(texto_largo.toLocaleLowerCase());
