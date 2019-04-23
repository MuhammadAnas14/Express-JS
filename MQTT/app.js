var mqtt =require("mqtt");
var client = mqtt.connect("mqtt:192.168.1.116");

client.on('connect',function(){
  client.subscribe('onoff')

});

client.on('message',function(anas,message){
  context
   = message.toString()
  console.log(context)
});
