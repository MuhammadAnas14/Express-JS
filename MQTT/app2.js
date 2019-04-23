var mqtt =require('mqtt');

var client =mqtt.connect("mqtt:192.168.1.116");
client.on('connect',function(){
  setinterval(function(){
    client.publish('anas','hello from anas');
    console.log('sent')
  },5000);
});