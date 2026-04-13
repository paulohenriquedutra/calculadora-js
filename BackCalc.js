function adicao(...nums) {
  let total = 0;
  nums.forEach((n) => {
    total += n;
  });
  return total;
}
function subtracao(...nums) {
  let total = nums[0];
  let tamanho = nums.length;
  console.log(tamanho);
  for (let i = 1; i < tamanho; i++) {
    total = total - nums[i];
  }
  return total;
}
function multiplicacao(...nums) {
  let total = nums[0];
  let tamanho = nums.length;
  for (let i = 1; i < tamanho; i++) {
    total = total * nums[i];
  }
  return total;
}
function divisao(...nums) {
  let total = nums[0];
  let tamanho = nums.length;
  for (let i = 1; i < tamanho; i++) {
    total = total / nums[i];
  }
  return total;
}

function calculadora(operador, ...nums){
  let validacaoNum = nums.every(n => typeof(n) === "number")
  switch (operador) {
    case "*":
      return multiplicacao(...nums);
      break;
    case "/":
      return divisao(...nums);
      break;
    case "+":
      return adicao(...nums);
      break;
    case "-":
      return subtracao(...nums);
      break;
    default:
      return nums;
    }
}
