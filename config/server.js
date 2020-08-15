/* import the express framework module */
var express = require('express');

/* import the consign module */
var consign = require('consign');

/* import the body-parser module */
var bodyParser = require('body-parser');

/* import the express-validator module */
var expressValidator = require('express-validator');

/* start the express object */
var app = express();

/* set the variables 'view engine' and 'views' of the express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configure the express.static middleware */
app.use(express.static('./app/public'));

/* configure body-parser middleware */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/* configure the express-validator middleware */
app.use(expressValidator());

/* autoload routes, models and controllers for the app object */
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);

/* middleware that configures status pages */
app.use(function(req, res, next){
	res.status(404).render('errors/404');
	next();
});

/* middleware that configures internal error messages */
app.use(function(err, req, res, next){
	res.status(500).render('errors/500');
	next();
});

/* export the app object */
module.exports = app;
