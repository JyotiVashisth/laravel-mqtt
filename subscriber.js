
const mqtt = require('mqtt')

const client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', () => {

   client.subscribe('test/data',{qos:1})

})
client.on('message',function(topic,message){
    console.log('this message :',message.toString());
    
    var sendDATA=message.toString();
var http=require('http');
var querystring = require('querystring');    
//const postData=sendDATA;
const postData=sendDATA;
    
const options = {
  hostname: '127.0.0.1',
  port: 8000,
  path: '/api/test',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();    
});
