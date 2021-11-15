const fileSystem = require ('fs');
function getTodos(req, res) {
    fileSystem.readFile('./fileServe.txt', 'utf-8',(err, fileData) =>{
        if (err) {
            res.status(400).send(err);
        } else {
            res.set('content-type', 'text/html');
            res.status(200).send(fileData);
        }
    })
}

function saveTodo(req, res) {
    fileSystem.appendFile('./fileServe.txt', '\nwarm up the cuddles', 'utf8', getTodos)
};

module.exports = {getTodos:getTodos};
