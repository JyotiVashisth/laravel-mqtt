const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', () => {
 var options={
     qos:1
 };
var datetime=new Date();
client.publish('test/data','data'+datetime,options)
  
})