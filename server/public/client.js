$(document).ready(makeReady);

function makeReady(){
    // console.log('all set');
    $('#equalsButton').on('click', requestTotal)
}

function fetchTotal(){
    $.ajax({
        method: 'GET',
        url: '/calculate'
    }).then((calculations) => {
        // for (let calc of calculations){
        // $('#calculations').append(``)
        // }
        console.log('received total')
    })

}



function requestTotal(){
    let equation;

    // Get input values 
    let firstNum = Number($('#firstNum').val());
    let secondNum = Number($('#secondNum').val());

    // get operator selected
    let operator = $('#operatorOptions option:selected').text();
    

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


    //* need to reset dropdown once button is clicked
    //* add 'equation' to DOM
}

//* 1a. Click submit Button and send a string with the two inputs and an operator to the server.