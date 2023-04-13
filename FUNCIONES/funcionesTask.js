function sinParametro() {
  return true;
}
console.log(sinParametro());

const soyAsincrono = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log("hola soy una promesa");
};

soyAsincrono();

function* generadorIndicePares() {
  let index = 1;
  while (true) {
    yield index;
    index++;
  }
}

const generador = generadorIndicePares();

console.log(generador.next().value);
console.log(generador.next().value);
