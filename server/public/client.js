$(document).ready(makeReady);

function makeReady(){
    // console.log('all set');
    $('#equalsButton').on('click', getTotal)
}





function getTotal(){
    
    let equation = [];

    // Get input values 
    let firstNum = $('#firstNum').val();
    equation.push(firstNum);

    // get operator selected
    let operator = $('#operatorOptions option:selected').text();
    equation.push(operator);
    
    let secondNum = $('#secondNum').val();
    equation.push(secondNum);

    // send POST request to server
    $.ajax({
        method: 'POST',
        url: '/calculate', 
        data: equation
    })


    console.log(equation);

    //* need to reset dropdown once button is clicked
    //* add 'equation' to DOM
}

//* 1a. Click submit Button and send a string with the two inputs and an operator to the server.