// let req = require('express');
// let express = req();

// let port = process.env.PORT || 6050;

//     express.listen(port);
//     console.log('Server started successfully.. !!! Times- PORT - ' + port + '\n\n\n');
'use strict'
let kafka = require('kafka-node');
let HighLevelConsumer = kafka.HighLevelConsumer;
let client = new kafka.Client();

async function consumerFunc() {
    let consumer = new HighLevelConsumer(
        client,
        [
            { topic: 'topic1' },
            {topic : 'topic2'}
        ]
    );

    console.log("client---",client);
  consumer.on('message', (message) => {
    console.log("message==", message)
  });
}



    
module.exports.consumerFunc = consumerFunc;