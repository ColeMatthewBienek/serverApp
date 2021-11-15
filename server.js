
const express = require ('express');
const app = express();
// const fileServer = require('./fileServer.js');
const PORT_NUMBER = 3000;


function generateConnectionMessage(errorMsg) {
    let displayMsg = errorMsg ? errorMsg : "conected to port: http//:localhost " + PORT_NUMBER;
    console.log(displayMsg);
 }
 app.get('/', (req, res)=>{
    res.send("Welcome to your server!")
})
//serve static files, i.e. images, CSS, JS==>express.static(root, [options])
app.use(express.static('public'));




//activate the listener
app.listen(PORT_NUMBER, generateConnectionMessage);
