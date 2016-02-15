//Lets require/import the HTTP module
var http = require('http');
var ForecastIo = require('forecastio');

//Lets define a port we want to listen to
const PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
  //response.end('It Works!! Path Hit: ' + request.url);
  console.log('request received');
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('_testcb(\'{"message": "Hello world!"}\')');
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
  //Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
  

  // var forecastIo = new ForecastIo('94ccca721c20d8f61c8277044ecdc3d8');
  // forecastIo.forecast('51.506', '-0.127').then(function(data) {
  // console.log(JSON.stringify(data, null, 2));
  //  });
});

function getWeather(){
  var forecastIo = new ForecastIo('94ccca721c20d8f61c8277044ecdc3d8');
  forecastIo.forecast('51.506', '-0.127').then(function(data) {
  console.log(JSON.stringify(data, null, 2));
   });
}