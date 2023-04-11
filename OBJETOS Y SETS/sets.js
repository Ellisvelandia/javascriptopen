//sets o conjuntos (en castellano)
const array = [1, 2, 3, 4, 5];

const miSet = new Set(array);
console.log(array);
console.log(miSet);
miSet.add("ellis");
console.log(miSet);
miSet.delete(1);
console.log(miSet);

console.log(array.includes(2));
console.log(miSet.has(4));
console.log(miSet.size);
miSet.forEach((value) => {
  console.log(value);
});

const it_miSet = miSet.values();
console.log(it_miSet);

const ar_miSet = [...miSet];
console.log(ar_miSet);
