'use strict'
// let req = require('express');
// let express = req();
// let port = process.env.PORT || 6060;

//     express.listen(port);
//     console.log('Server started successfully.. !!! Times- PORT - ' + port + '\n\n\n');



async function producer(){
    const kafka = require('kafka-node'),
    HighLevelProducer = kafka.HighLevelProducer,
    client = new kafka.Client(),
    producer = new HighLevelProducer(client),
    payloads = [
        { topic: 'topic1', messages: JSON.stringify({a : 'hi', b : 'world'}) },
        { topic: 'topic2', messages: ['hello', 'world'] }
    ];
    producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        console.log("producer",data);
        console.log("error",err);
    
    });
    });
}


    
module.exports.producer = producer;