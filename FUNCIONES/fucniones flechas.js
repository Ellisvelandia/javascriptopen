//funciones tipos flechas

const array = [1, 5, 6, 2, 7, 12, 8, 92];

const array2 = array.map((value) => {
  console.log(value * 2);
});

const flechaFuncion = (name) => {
  console.log(`first name is ${name}`);
};

flechaFuncion("ellis");

const dobleValor = (valor) => valor * 2;
console.log(dobleValor(50));
