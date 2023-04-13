function factorial(a) {
  let factorial = 1;
  for (let i = 0; i <= a; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(factorial(10));
