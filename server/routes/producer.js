const Kafka = require('kafka-node');
// const config  = require('./config');

const Producer = Kafka.Producer;
const client = new Kafka.KafkaClient({kafkaHost: 'localhost:9092'});
const producer = new Producer(client);





const pushDataToKafka =(dataToPush) => {

  try {
  let payloadToKafkaTopic = [{topic: 'test', messages: JSON.stringify(dataToPush) }];
  console.log(payloadToKafkaTopic);
  producer.on('ready', function() {
    producer.send(payloadToKafkaTopic, (err, data) => {
          console.log('data: ', data);
  });

  producer.on('error', function(err) {
    //  handle error cases here
    console.log("Failed",err);
  })
  })
  }
catch(error) {
  console.log(error);
}

};

module.exports = {pushDataToKafka};
// export const pushDataToKafka;

// const jsonData = require('./app_json.js');

// pushDataToKafka(jsonData);
