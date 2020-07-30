var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/data',(req, res) => {
  var user=req.body.user;
  var xcord=req.body.xcoord;
  var ycord=req.body.ycoord;
  var hitmiss=req.body.hitmiss;
  var time=req.body.time;
  console.log(user,xcord,ycord,hitmiss,time);
  res.end("yes");
});

module.exports = router;
