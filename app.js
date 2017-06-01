const express = require('express');
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname+'/client')));

app.get('/', function (req, res) {
  res.send();
})

app.listen(3333, function () {
  console.log('CSRF demo. Listening on port 3333!')
})
