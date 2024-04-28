const resultsLog = document.getElementById('resultsLog');

function updateResultsLog(rollData) {
  const timestamp = new Date().toLocaleString();
  const logEntry = document.createElement('div');
  logEntry.classList.add('log-entry');
  logEntry.textContent = `${timestamp} Rolling ${rollData.line} : ${rollData.dice} + ${rollData.modifier} to total : ${rollData.result}, TOTAL: ${rollData.total}`;
  resultsLog.appendChild(logEntry);
}

function saveLogToPDF() {
  // This function would typically use a library like jsPDF to convert the log to a PDF
  // Since we cannot include the entire library in this response, here is a pseudo-code outline
  // of how the function might look:

  // Initialize a new jsPDF instance
  const doc = new jsPDF();

  // Get the text content of the results log
  const logContent = resultsLog.innerText;

  // Add text to the PDF
  doc.text(logContent, 10, 10);

  // Save the PDF
  doc.save('results-log.pdf');
}

// Example usage:
// updateResultsLog({
//   line: 'line 1',
//   dice: '1d6',
//   modifier: '+ 0',
//   result: 3,
//   total: 3
// });