
const express = require ('express');
const app = express();
const fileServer = require('./fileServer.js');
const PORT_NUMBER = 3000;
const axios = require('axios').default;

function generateConnectionMessage(errorMsg) {
    let displayMsg = errorMsg ? errorMsg : "conected to port: " + PORT_NUMBER;
    console.log(displayMsg);
 }

//serve static files, i.e. images, CSS, JS==>express.static(root, [options])
app.use(express.static('public'));

//the public folder & file with functions
app.get('/todos', fileServer.getTodos)

//activate the listener
app.listen(PORT_NUMBER, generateConnectionMessage);
