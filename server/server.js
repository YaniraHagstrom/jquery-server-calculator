// bring express into your project
// you will need to `npm init` and `npm install express` first


// create your express app
const express = require('express');
const app = express();

// Create a variable whose value is the port address.
const PORT = 5000;

// Tell our server where the static assets live:
app.use(express.static('server/public'));

// Start the server:
// Don't forget to start your app by running `.listen()`
app.listen(PORT, () => {
    console.log(`hey. listen. http://localhost:${PORT}`)
})

// Import body-parser:
const bodyParser = require('body-parser');

// Teach our server how to read JSON:
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/equation', (req, res) => {
    console.log(req.body);
})

//* 1b. Receive the array and perform the calculation.
    //* use .eval()?
    //* example ['1', '+', '2']
    //** ex {
    // firstNum: '1',
    // operator: '+',
    // secondNum: '2'
    // }*/ 

calcArray=[];

function totalCalculation(){
    //* append object to the object array that I still need to make. 
    calcArray.push();
}