// import {pushDataToKafka} from './producer.js';
var express = require('express');
var router = express.Router();
var objArray = [];
var fs = require('fs');
var path = require('path');
var appDir = path.dirname(require.main.filename);
const producer = require('./producer');


// const Producer = Kafka.Producer;
// const client = new Kafka.KafkaClient({kafkaHost: "localhost:9092"});
// const producer = new Producer(client,  {requireAcks: 0, partitionerType: 2});



// const pushDataToKafka =(dataToPush) => {

//   try {
//   let payloadToKafkaTopic = [{topic: "test", messages: JSON.stringify(dataToPush) }];
//   console.log(payloadToKafkaTopic);
//   producer.on('ready', async function() {
//     producer.send(payloadToKafkaTopic, (err, data) => {
//           console.log('data: ', data);
//   });

//   producer.on('error', function(err) {
//     //  handle error cases here
//   })
//   })
//   }
// catch(error) {
//   console.log(error);
// }

// };


const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}

const loadData = (path) => {
  try {
    return fs.readFileSync(path, 'utf8')
  } catch (err) {
    console.error(err)
    return false
  }
}

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
  newobj = req.body
  objArray.push(newobj)
  res.end("yes");
});

setInterval(function(){ 
  if(objArray.length<2){
    return
  }
  console.log("obarray len",objArray.length)
  var rawdata = loadData("./apidata.json");
  var apidata = JSON.parse(rawdata);
  console.log("read",apidata)
  apidata.data = apidata.data.concat(objArray);
  storeData(apidata,"./apidata.json");
  producer.pushDataToKafka(objArray);
  objArray = []
}, 3000);

module.exports = router;
