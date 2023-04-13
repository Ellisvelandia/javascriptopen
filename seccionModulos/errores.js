const miFuncion = (val) => {
  if (typeof val === "number") {
    return 2 * val;
  }
  throw new Error("El valor debe ser de tipo numero");
};

const numero = 8;

try {
  console.log("Esta ejecutandose de manera correcta");
  const doble = miFuncion(numero);
  console.log(doble);
} catch (error) {
  console.log("Error!");
} finally {
  console.log(
    "Esto se va a ejecutar tanto si se produce algun error alguno , como si no existe ninguno"
  );
}

//InternalError, syntaxusError, TypeError, Reference
//
