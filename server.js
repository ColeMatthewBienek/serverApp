const express = require ('express');
const app = express();
const fileServer = require('./fileServer.js');
const PORT_NUMBER = 3000;

// console.log(fileServer.getTodos());


app.get('/', function(req,res){
    res.send('Hello Whole Wide World!!')
})

function generateConnectionMessage(errorMsg) {
   let displayMsg = errorMsg ? errorMsg : "conected to port: " + PORT_NUMBER;
   console.log(displayMsg);
}
//serve static files, i.e. images, CSS, JS==>express.static(root, [options])
app.use(express.static('public'));


//activate the listener
app.listen(PORT_NUMBER, generateConnectionMessage);
