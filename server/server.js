// bring express into your project
// you will need to `npm init` and `npm install express` first

// ******** Server Stuff *********
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
/////////////////////////////////////////////////

// ******** Body Parser ************
// Import body-parser:
const bodyParser = require('body-parser');
const e = require('express');

// Teach our server how to read JSON:
app.use(bodyParser.urlencoded({ extended: true }));
//////////////////////////////////////////////////


let equation;
calcArray=[];
let total;

app.post('/calculate', (req, res) => {
    // console.log('Post Received');
    equation = req.body;
    calcArray.push(equation);
    res.sendStatus(201);
})

app.get('/calculate', (req, res) => {
    calcTotal();
    res.send(calcArray);
    console.log(equation);
})


// {firstNum: '1', operator: '+', secondNum: '3'}
function calcTotal() {
    let operator = equation.operator;
    switch (operator) {
        case '+':
            total = Number(equation.firstNum)+ Number(equation.secondNum);
            break;

        case '-':
            total = Number(equation.firstNum)- Number(equation.secondNum);
            break;

        case '*':
            total = Number(equation.firstNum)* Number(equation.secondNum);
            break;

        case '/':
            total = Number(equation.firstNum)/ Number(equation.secondNum);
        default:
            console.log('something went wrong');
    }
    equation.total = total
    console.log(total);
    console.log(equation);
}

