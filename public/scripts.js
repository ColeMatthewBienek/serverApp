const functions = require('./../fileServer');
let {getTodos, saveTodo} = functions;

let place = Document.getElementById('textPlace');
place.value = getTodos();

