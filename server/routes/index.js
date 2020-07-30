var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/data',(req, res) => {
  var user=req.body.user;
  var xcoord=req.body.xcoord;
  var ycoord=req.body.ycoord;
  var hitmiss=req.body.hitmiss;
  var time=req.body.time;
  var level = req.body.level;
  var wave = req.body.wave;
  console.log(user,xcoord,ycoord,hitmiss,time,level,wave);

  res.end("yes");
});

module.exports = router;
