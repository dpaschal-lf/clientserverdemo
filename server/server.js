
const express = require('express');
const cors = require('cors');
const server = express();

const names = [{
	"name": "Samantha"
}, {
	"name": "Jae"
}, {
	"name": "Nicholaus"
}];

const favFoods = [{
	"foodName": "salmon",
	"agePreferred": 12
}, {
	"foodName": "human souls",
	"agePreferred": 30
}];

server.use( cors() );

server.get('/favfoods', (request, response)=>{
    response.send(favFoods);
})

server.get('/names', (request, response)=>{
    response.send(names);
})

server.listen(3001, ()=>{
    console.log('carrier has arrived');
})



