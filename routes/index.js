var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AngularJS Talle 1' });
});

module.exports = router;

/*var express= require('express'),
app = express();

app.use(express.static(__dirname+'/public')).get('*',function(req,res) {
    res.sendfile('/public/taller.html',{root:__dirname});
}).listen(3000);*/
