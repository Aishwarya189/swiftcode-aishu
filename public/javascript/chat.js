var app=angular.module('chatApp',['ngMaterial']);
app.controller('chatController',function($scope){
	$scope.messages = [{
		sender:"BOT" ,
		text:"hellooo",
		time:"1:29PM"
	},
	{
		sender:"USER",
		text:"heyy",
		time:"1:30PM"
	},
	{
		sender:"USER",
		text:"good afternoon",
		time:"1:30PM"
	}];
var exampleSocket = new  WebSocket("ws://localhost:9000/chatSocket");
exampleSocket.onmessage  =   function  (event) {
       var jsonData = JSON.parse(event.data);
       console.log(jsonData);
   };

});