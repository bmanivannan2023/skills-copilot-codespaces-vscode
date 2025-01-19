// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments.json
const comments = require('./comments.json');

// Set up a simple route
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

// Run the server with node comments.js
// Open http://localhost:3000/comments in your browser or with curl

