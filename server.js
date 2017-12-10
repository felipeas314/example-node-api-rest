var app = require('./conf/custom-express')();

app.listen(3000, function(){
  console.log('Servidor rodando na porta 3000.');
});