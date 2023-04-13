function fibonacci(num) {
  let sequence = [1, 1];

  for (let i = 2; i < num; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence.slice(0, num);
}

console.log(fibonacci(6));
