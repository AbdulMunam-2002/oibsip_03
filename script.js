function convertTemperature() {
    var degreeInput = document.getElementById('degree').value;
    var tempType = document.getElementById('temp-type').value;
    var resultContainer = document.getElementById('result-container');

    if (tempType === 'fahrenheit') {
        resultContainer.innerHTML = '<label for="result">Result: </label>' + degreeInput + ' °C is ' + (degreeInput * 9/5 + 32) + ' °F';
    } else if (tempType === 'celsius') {
        resultContainer.innerHTML = '<label for="result">Result: </label>' + degreeInput + ' °F is ' + ((degreeInput - 32) * 5/9) + ' °C';
    }
}