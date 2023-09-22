

function calculateBMI() {
  let heightInput = document.getElementById('height-input');
  let weightInput = document.getElementById('weight-input');

  let height = heightInput.value;
  let weight = weightInput.value;

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

  clear.addEventListener("click",function(){
    heightInput.value = "";
    weightInput.value = "";
    bmiResult.innerHTML = "";
  })

  // clear.addEventListener("click",function(){
  //   console.log("hi")
  //   height ="";
  //   bmiResult.innerHTML = "";
  // })
  // clear.addEventListener('click', () => {
  //   height.value = "";
  //   weight.value = "";
  //   console.log("hi")
  // });
}

