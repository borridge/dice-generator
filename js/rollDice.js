// rollDice.js
function rollDice(sides) {
  if (typeof sides !== 'number' || sides <= 0) {
    throw new Error("Invalid number of sides");
  }
  return Math.floor(Math.random() * sides) + 1;
}

// For Node.js or modular support
if (typeof module !== 'undefined') {
  module.exports = rollDice;
}

// =========================
// Unit tests (for manual testing)
// =========================
(function testRollDice() {
  console.log("Running rollDice tests...");
  let passed = 0, failed = 0;

  // Test valid dice sides (1 to 100)
  for (let i = 1; i <= 100; i++) {
    for (let j = 0; j < 10; j++) {
      const result = rollDice(i);
      if (result < 1 || result > i) {
        console.error(`❌ Failed: rollDice(${i}) returned ${result}`);
        failed++;
      } else {
        passed++;
      }
    }
  }

  // Test invalid input
  try {
    rollDice(0);
    console.error("❌ Failed: rollDice(0) should throw an error");
    failed++;
  } catch {
    passed++;
  }

  try {
    rollDice("six");
    console.error("❌ Failed: rollDice('six') should throw an error");
    failed++;
  } catch {
    passed++;
  }

  console.log(`✅ Passed: ${passed} | ❌ Failed: ${failed}`);
})();
