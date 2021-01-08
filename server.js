const express = require('express');
const path = require('path');
const app = express();

const distPath = path.join(__dirname, '/dist/angular-todo');

app.use(express.static(distPath));

app.listen(process.env.PORT || 8080);

app.get('/*', function(req,res) {
  res.sendFile(path.join(distPath, 'index.html'));
});
