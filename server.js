const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();

// Serve static files from the 'dist' directory
app.use(serveStatic(path.join(__dirname, 'dist')));

// Catch-all route to serve 'index.html'
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App is listening on port ${port}`);