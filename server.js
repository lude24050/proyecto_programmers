var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;


var router = express.Router();


router.get('/', function(req, res){
  res.json({ message: 'genial! bienvenido a nuestra API!'})
});

var mascotasRouter = require('./routes/mascotas');
router.use('/mascotas', mascotasRouter);

app.use('/api', router);

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bda');
mongoose.Promise = global.Promise;

app.listen(port);
console.log('la magia sucede en el puerto '+ port);
