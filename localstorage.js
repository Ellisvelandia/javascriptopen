// Crear variables con nombre y apellido
let nombre = "ellis";
let apellido = "velandia";

// Crear un objeto con el nombre y el apellido
let usuario = {
  nombre: nombre,
  apellido: apellido,
};

// Almacenar el objeto en SessionStorage
sessionStorage.setItem("usuario", JSON.stringify(usuario));

// Almacenar el objeto en LocalStorage
localStorage.setItem("usuario", JSON.stringify(usuario));

// Crear una cookie que caduque en 2 minutos con los datos del objeto
let expiryDate = new Date();
expiryDate.setMinutes(expiryDate.getMinutes() + 2);

document.cookie = `usuario=${JSON.stringify(
  usuario
)}; expires=${expiryDate.toUTCString()};`;

// Observar cómo se almacenan los datos en SessionStorage, LocalStorage y cookies en Google Chrome

// Cerrar el navegador y comentar las líneas que almacenan SessionStorage, LocalStorage y cookies

// Abrir el navegador y observar cómo SessionStorage está vacía
console.log(sessionStorage.getItem("usuario")); // null

// Observar cómo LocalStorage sigue manteniendo el objeto que se almacenó antes
console.log(localStorage.getItem("usuario"));

// Observar cómo la cookie sigue manteniendo el objeto que se almacenó antes, aunque ya está caducado
console.log(document.cookie);
