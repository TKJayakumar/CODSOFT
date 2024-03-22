document.addEventListener("DOMContentLoaded", function() {
  const display = document.getElementById('display');
  let currentInput = '';

  document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', function() {
      const value = this.textContent;
      if (value === '=') {
        calculate();
      } else if (value === 'C') {
        clearDisplay();
      } else if (value === 'D') {
        backspace();
      } else if (value === '(' || value === ')') { // Handle open/close brackets
        currentInput += value;
        display.value = currentInput;
      } else if (value === '^') { // Handle exponential
        currentInput += '**'; // In JavaScript, exponential is represented by **
        display.value = currentInput;
      } else {
        currentInput += value;
        display.value = currentInput;
      }
    });
  });

  function clearDisplay() {
    currentInput = '';
    display.value = '';
  }

  function backspace() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  }

  function calculate() {
    try {
      const result = eval(currentInput);
      display.value = result;
      currentInput = '';
    } catch (error) {
      display.value = 'Error';
    }
  }
});