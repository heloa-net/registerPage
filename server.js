var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('users', ['users']);

app.use(express.static(__dirname + "/public"));

// app.get('/users', function (req, res) {
//     console.log("I received a GET request");

//     db.users.find(function (err, docs) {
//         console.log(docs);
//         res.json(docs);
//     });
// });

// app.post('/users', function (req, res) {
//     console.log(res.body);
// });

app.listen(3000);
console.log("Servidor rodando na porta 3000\n Abra http://localhost:3000");