const fs = require('fs');
// const mongoose = require('mongoose');
const gridfs = require('mongoose-gridfs');

// mongoose.connect('mongodb://localhost/myvideoDb');
console.log("=============================")

const { model: Attachment } = gridfs({
    collection: 'attachments',
    model: 'Attachment',
  });

async function putMongo() {
    const readStream = fs.createReadStream('video');
    const attachment = new Attachment({
      filename: 'video',
      contentType: 'video/3gpp'
    });
    attachment.write(readStream, (error, attachment) => { 
        console.log("error===",JSON.stringify(error))
        console.log("attachment===",JSON.stringify(attachment))
        fetchMongo(attachment._id)
     });
}

async function fetchMongo(id) {
    
    const readStream = Attachment.readById(id);
    readStream.on('error', (error)=> {
        console.log("error",error)
    });
    readStream.on('data', (data) => {
        console.log("data===",data);
    });
    console.log("readStream----",readStream)

}

module.exports.putMongo = putMongo;
module.exports.fetchMongo = fetchMongo;
