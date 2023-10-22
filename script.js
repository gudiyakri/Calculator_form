let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').textContent = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').textContent = displayValue;
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        document.getElementById('display').textContent = displayValue;
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('display').textContent = displayValue;
    }
}
