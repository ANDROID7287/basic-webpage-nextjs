const express = require('express');
const app = express();
const port = 3000;

// Serve static files (like HTML, CSS, JS) from the 'public' directory
app.use(express.static('public'));

// Set up a basic route to respond to requests
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Node.js Website!</h1>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
