var express = require('express')
var app = express()
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // http://expressjs.com/api.html#app.set
var expressLayouts = require('express-ejs-layouts');
app.set('layout', 'layout'); // defaults to 'layout' '
app.use(express.static('.')); // http://expressjs.com/api.html#app.use#
app.use(expressLayouts);
app.set('port', (process.env.PORT || 8080));

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
	res.render('body', { title: "form"});
});

app.post('/', function(req, res){
	var temp = new Temperatura();
	var respuesta = temp.convertir(req.body.original);
	res.render('pages/index',{title:"Conversor de Temperatura ExpressJS", result: respuesta});
});
app.listen(app.get('port'), function() {
console.log("Node app is running at localhost:" + app.get('port'));
});


