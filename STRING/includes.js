//Metodos de cadenas de textos parte 3

//https//regexr.com

let texto_largos =
  "ellis esta haciendo un curso de javascript en open bootcamp , ya que open bootcamp es una recurso gratuito de calidad que te ayuda a mejorar tus skills por ese recominedo open bootcamp";

//convierte las palabras repetidas en un array

console.log(texto_largos.match(/open/g));

// encuentra la palabra y devuelve un booleano

console.log(texto_largos.includes("open"));

// saber si existe un texto empieza con una pálabra
console.log(texto_largos.startsWith("open"));

// saber si existe un texto termina con una pálabra
console.log(texto_largos.endsWith("open"));
