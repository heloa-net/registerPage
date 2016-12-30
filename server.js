var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.listen(process.env.PORT || 5000)
console.log("Servidor rodando na porta 5000\nAbra http://localhost:5000");