var path = require('path');
var express = require('express');


var app = express();

app.use(express.static('build'));
app.use('/css', express.static('css'));
app.use('/img', express.static('img'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3000');
});
