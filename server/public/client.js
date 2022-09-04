$(document).ready(makeReady);

function makeReady(){
    // console.log('all set');
    $('#equalsButton').on('click', requestTotal);
    $('#clearButton').on('click', clearInputs);
}

function fetchTotal(){
    $('#calculations').empty();
    $.ajax({
        method: 'GET',
        url: '/calculate'
    }).then((calculations) => {
        for (let calc of calculations){
            let firstNumber = calc.firstNum;
            let secondNumber = calc.secondNum;
            let op = calc.operator;
            let total = calc.total;
            $('#calculations').append(`<li>${firstNumber} ${op} ${secondNumber} = ${total}</li>`)
            }
            // console.log(calculations);
    })

}



function requestTotal(){
    let equation;

    // Get input values 
    let firstNum = $('#firstNum').val();
    let secondNum = $('#secondNum').val();

    // get operator selected
    let operator = $('#operatorOptions option:selected').text();

    if (operator === 'Choose Operator'){
        alert('Please choose an operator')
    }
    else{
        equation = {
            firstNum: firstNum,
            operator: operator,
            secondNum: secondNum
        }
        
        // send POST request to server
        $.ajax({
            method: 'POST',
            url: '/calculate', 
            data: equation
        }).then((response) => {
            // console.log(response);
        })

        
        fetchTotal();
    }
}

function clearInputs(){
    $('#firstNum').val('');
    $('#secondNum').val('');
    // Reset the drop down
    $('#operatorOptions').val('0');
}