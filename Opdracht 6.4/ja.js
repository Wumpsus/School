function calculate() {
    const num1 = Math.floor(Math.random() * 12) + 1;
    const num2 = Math.floor(Math.random() * 12) + 1;
  
    const sum = num1 + num2;
  
    console.log(`Antwoord: ${sum}`);
  }
  
  calculate();
  
  function multiplyByFive(inputNumber) {
    const result = inputNumber * 5;
  
    console.log(`Antwoord: ${result}`);
  }
  
  multiplyByFive(7);
  
  function calculateMinutes(seconds) {
    const minutes = seconds / 60;
  
    console.log(`Antwoord: ${minutes}`);
  }
  
  calculateMinutes(3600);
  