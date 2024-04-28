const mysql = require('mysql');
const db = require('../config/db');

const DiceRollSchema = {
  id: {
    type: 'INT',
    primaryKey: true,
    autoIncrement: true
  },
  numberOfDice: {
    type: 'INT',
    allowNull: false
  },
  typeOfDice: {
    type: 'VARCHAR(4)',
    allowNull: false
  },
  modifier: {
    type: 'INT',
    allowNull: false
  },
  result: {
    type: 'INT',
    allowNull: false
  },
  timestamp: {
    type: 'TIMESTAMP',
    default: mysql.raw('CURRENT_TIMESTAMP'),
    allowNull: false
  },
  notes: {
    type: 'TEXT',
    allowNull: true
  }
};

const createDiceRollsTable = () => {
  const connection = mysql.createConnection(db);

  const tableCreationQuery = `
    CREATE TABLE IF NOT EXISTS dice_rolls (
      id INT AUTO_INCREMENT PRIMARY KEY,
      numberOfDice INT NOT NULL,
      typeOfDice VARCHAR(4) NOT NULL,
      modifier INT NOT NULL,
      result INT NOT NULL,
      timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
      notes TEXT
    )
  `;

  connection.query(tableCreationQuery, function (error, results, fields) {
    if (error) throw error;
    console.log('Dice rolls table created or already exists.');
  });

  connection.end();
};

module.exports = {
  DiceRollSchema,
  createDiceRollsTable
};