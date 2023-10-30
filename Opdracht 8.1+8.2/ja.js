function add() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (num1 > 0 && num2 > 0) {
        const result = num1 + num2;
        document.getElementById('result').textContent = result;
        document.body.style.backgroundColor = 'green';
    } else {
        document.getElementById('result').textContent = "Het getal is te laag";
        document.body.style.backgroundColor = 'red';
    }
}

function minus() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (num1 > 0 && num2 > 0) {
        const result = num1 - num2;
        document.getElementById('result').textContent = result;
        document.body.style.backgroundColor = 'green';
    } else {
        document.getElementById('result').textContent = "Het getal is te laag";
        document.body.style.backgroundColor = 'red';
    }
}

function multiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (num1 > 0 && num2 > 0) {
        const result = num1 * num2;
        document.getElementById('result').textContent = result;
        document.body.style.backgroundColor = 'green';
    } else {
        document.getElementById('result').textContent = "Het getal is te laag";
        document.body.style.backgroundColor = 'red';
    }
}

function divide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (num1 > 0 && num2 > 0) {
        if (num2 === 0) {
            document.getElementById('result').textContent = "Kan niet delen door nul.";
            document.body.style.backgroundColor = 'red'; 
        } else {
            const result = num1 / num2;
            document.getElementById('result').textContent = result;
            document.body.style.backgroundColor = 'green';
        }
    } else {
        document.getElementById('result').textContent = "Het getal is te laag";
        document.body.style.backgroundColor = 'red';
    }
}

function clearFields() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('result').textContent = "";
    document.body.style.backgroundColor = 'white';
}