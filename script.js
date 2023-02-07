const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const result = document.getElementById("result");

document.getElementById("btnAdd").addEventListener("click", function() {
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  result.textContent = "Resultado: " + (num1 + num2);
});

document.getElementById("btnSubtract").addEventListener("click", function() {
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  result.textContent = "Resultado: " + (num1 - num2);
});

document.getElementById("btnDivide").addEventListener("click", function() {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);
  
    if (num2 === 0) {
      result.textContent = "Não é possível dividir por 0";
    } else {
      result.textContent = "Resultado: " + (num1 / num2);
    }
});

document.getElementById("btnMultiply").addEventListener("click", function() {
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  result.textContent = "Resultado: " + (num1 * num2);
});

document.getElementById("btnPower").addEventListener("click", function() {
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  result.textContent = "Resultado: " + Math.pow(num1, num2);
});

document.getElementById("btnSquareRoot").addEventListener("click", function() {
  const num1 = parseFloat(input1.value);
  result.textContent = "Resultado: " + Math.sqrt(num1);
});

document.getElementById("btnFactorial").addEventListener("click", function() {
  let num1 = parseFloat(input1.value);
  let factorial = 1;
  for (let i = 1; i <= num1; i++) {
    factorial *= i;
  }
  result.textContent = "Resultado: " + factorial;
});

document.getElementById("btnPercentage").addEventListener("click", function() {
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  result.textContent = "Resultado: " + (num1 * (num2 / 100)) + "%";
});

document.getElementById("btnAverage").addEventListener("click", function() {
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  result.textContent = "Resultado: " + ((num1 + num2) / 2);
});
