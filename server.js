const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// any USES to be added before the CRUD ops
app.use(bodyParser.urlencoded({ extended: true }));

// Initiate connection on port 3000
app.listen(3000, () => {
    console.log('listening on port 3000');    
});

// GET
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// POST 
app.post('/quotes', (req, res) => {
    console.log('Hello, you are posting now');
    console.log(req.body);
}); 

console.log('May the node be with you');