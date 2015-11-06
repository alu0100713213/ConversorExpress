var express = require('express');
var app = express();
var path = require('path');
var temperatura = require("static/temperatura.js");
var expressLayouts = require('express-ejs-layouts');
app.set('layout', 'layout'); // defaults to 'layout'  '

// Serve static files
app.use(express.static('.'));
app.use(expressLayouts);

app.set('port', (process.env.PORT || 8080));

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
  res.render('index');
});

app.post('/', function(req, res){
  var temp = new temperatura();

  var resultado = temp.convertir(req.body.original);
   res.render('res', {resultado: resultado, title: 'res'});
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

