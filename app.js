function calculateMBI() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultDiv = document.getElementById('result');

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (!height || !weight || height <= 0 || weight <= 0) {
        resultDiv.textContent = 'Please enter valid height and weight values.';
        resultDiv.style.color = 'red';
        return;
    }

    const heightInMeters = height / 100;
    const mbi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let category = '';
    if (mbi < 18.5) {
        category = 'Underweight';
    } else if (mbi >= 18.5 && mbi < 24.9) {
        category = 'Normal weight';
    } else if (mbi >= 25 && mbi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    resultDiv.textContent = `Your BMI is ${mbi} (${category}).`;
    resultDiv.style.color = 'black';
}