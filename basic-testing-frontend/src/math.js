export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number; // + force to convert string to number
  }
  return sum;
}
