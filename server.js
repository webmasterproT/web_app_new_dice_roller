```javascript
const express = require('express');
const path = require('path');
const db = require('./config/db');

const diceRoutes = require('./routes/diceRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL database.');
});

// Set up EJS for templating
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/', diceRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```