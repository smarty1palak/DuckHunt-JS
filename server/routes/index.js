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
  console.log(user,xcoord,ycoord,hitmiss,time);

  res.end("yes");
});

module.exports = router;
