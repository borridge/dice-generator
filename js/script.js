// script.js
function handleRoll() {
    const sides = parseInt(document.getElementById("dice").value);
    const result = rollDice(sides);
    document.getElementById("result").innerText = `You rolled: ${result}`;
  }
  
  document.getElementById("rollButton").addEventListener("click", handleRoll);
  