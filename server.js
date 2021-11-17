
const express = require ('express');
const app = express();
// const fileServer = require('./fileServer.js');
const PORT_NUMBER = 3000;
const mongoose = require('mongoose');
const mongoClient = require('mongodb').mongoClient;
const mongoURL = 'mongodb://localhost:27017/';

function generateConnectionMessage(errorMsg) {
    let displayMsg = errorMsg ? errorMsg : "conected to port: http//:localhost " + PORT_NUMBER;
    console.log(displayMsg);
 }

// main().catch(err => console.log(err));

// async function main(){
//     await mongoose.connect('mongodb://localhost:27017/test');
//     const kittySchema = new mongoose.Schema({
//         name: String
//     });
//     const kitten = mongoose.model('Kitten', kittySchema);
//     const silence = new kitten({name: 'Silence'});
//     console.log(silence.name); 
// }

app.get('/:userName', (req, res)=>{
    res.send('Your name is ' + req.params.userName + '\n')
})
//serve static files, i.e. images, CSS, JS==>express.static(root, [options])
app.use(express.json());

app.post('/', (req, res) => {
    res.json(req.body);
})


// app.use(express.static('public'));





//activate the listener
app.listen(PORT_NUMBER, generateConnectionMessage);
