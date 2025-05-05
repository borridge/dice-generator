// rollDice.js
function rollDice(sides) {
    if (typeof sides !== 'number' || sides <= 0) {
      throw new Error("Invalid number of sides");
    }
    return Math.floor(Math.random() * sides) + 1;
  }
  
  // For Node.js testing support
  if (typeof module !== 'undefined') {
    module.exports = rollDice;
  }
  