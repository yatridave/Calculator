function calculate() {
    debugger
    // Get values from the input fields

    let value1 = document.getElementById('value1').value;
    let value2 = document.getElementById('value2').value;
    let operator = document.getElementById('operator').value;

    let result;

    // Perform the calculation 

    value1 = parseInt(value1);
    value2 = parseInt(value2);

    if (operator === '+') {
        result = value1 + value2;
    } else if (operator === '-') {
        result = value1 - value2;
    } else if (operator === '*') {
        result = value1 * value2;
    } else if (operator === '/') {
        if (value2 != 0) {
            result = value1 / value2;
        } else {
            result = "cannot devide by zero";
        }
    } else {
        result = "Invalid operator";
    }

    // Display the result
    document.getElementById('result').value = result;
}