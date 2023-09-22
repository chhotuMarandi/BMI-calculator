

function calculateBMI() {
  let height = document.getElementById('height-input').value;
  let weight = document.getElementById('weight-input').value;

  let bmiResult = document.getElementById('bmi');

  let bmi = (weight / height / height) * 10000;
  const bmiValue = bmi.toFixed(2);

  if (bmiValue < 18.5) {
    bmiResult.innerHTML = `underweight (${bmiValue})`;
  } else if (bmiValue > 18.5 && bmi < 24.9) {
    bmiResult.innerHTML = `Normal (${bmiValue})`;
  } else if (bmiValue > 25 && bmi < 29.9) {
    bmiResult.innerHTML = `Overweight (${bmiValue})`;
  } else {
    bmiResult.innerHTML = `Obese (${bmiValue})`;
  }

  let clear = document.getElementById('clear');

  clear.addEventListener('click', () => {
    console.log('hi');
  });
}

