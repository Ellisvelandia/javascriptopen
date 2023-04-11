//como unir dos listas .concat(lista2)

const lista1 = [1, 2, 3, true, null];

const lista2 = [undefined, false, "ellis", 4];

console.log(lista1.concat(lista2));

const lista3 = lista1.concat(lista2);

console.log(lista3);

//Como unir dos listas con le factor de propagacion

console.log(...lista3);

const lista4 = [...lista1, ...lista2];

console.log(lista4);
