var http = require('http');
var app = require('./conf/custom-express')();

require('./conf/database')('mongodb://localhost/album');

app.listen(3000, function(){
  console.log('Servidor rodando na porta 3000.');
});