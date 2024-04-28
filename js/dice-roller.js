// dice-roller.js

// Function to roll a single die of any number of sides
function rollDie(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// Function to roll multiple dice and apply a modifier
function rollDice(numberOfDice, typeOfDice, modifier) {
  let results = [];
  let total = 0;
  for (let i = 0; i < numberOfDice; i++) {
    const roll = rollDie(typeOfDice);
    results.push(roll);
    total += roll;
  }
  total += modifier;
  return { results, total };
}

// Function to handle the dice roll button click
function handleRollClick() {
  const numberOfDice = parseInt(document.getElementById('numberOfDice').value, 10);
  const typeOfDice = parseInt(document.getElementById('typeOfDice').value, 10);
  const modifier = parseInt(document.getElementById('modifier').value, 10);
  const rollData = rollDice(numberOfDice, typeOfDice, modifier);
  displayRollResults(rollData);
  updateResultsLog(rollData, numberOfDice, typeOfDice, modifier);
}

// Function to display the roll results in the output area
function displayRollResults(rollData) {
  const outputElement = document.getElementById('output');
  outputElement.textContent = `Roll: ${rollData.results.join(', ')} | Total: ${rollData.total}`;
}

// Attach event listener to the roll button
document.getElementById('rollButton').addEventListener('click', handleRollClick);

// Function to update the results log
function updateResultsLog(rollData, numberOfDice, typeOfDice, modifier) {
  const resultsLogElement = document.getElementById('resultsLog');
  const timestamp = new Date().toLocaleString();
  const logEntry = document.createElement('div');
  logEntry.textContent = `${timestamp} Rolling ${numberOfDice}d${typeOfDice} + ${modifier}: ${rollData.results.join(', ')} | Total: ${rollData.total}`;
  resultsLogElement.prepend(logEntry); // Add the new log entry to the top of the log
}

// Function to add a new dice roller
function addDiceRoller() {
  // Logic to add a new dice roller will go here
  // This will involve dynamically creating new HTML elements for the additional dice roller
}

// Attach event listener to the add dice roller button
document.getElementById('addDiceRoller').addEventListener('click', addDiceRoller);

// Export functions if needed for other modules
// Note: This is not necessary for a static website, but included for potential future use
// module.exports = {
//   rollDie,
//   rollDice,
//   handleRollClick,
//   displayRollResults,
//   updateResultsLog,
//   addDiceRoller
// };