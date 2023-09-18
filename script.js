let age = document.getElementById("age");
let height = document.getElementById("height-input").value;
let weight = document.getElementById("weight-input").value;

// let height = 150;
// let weight = 60;

// console.log(height)



function calculateBMI(){
console.log(height)

  let bmi = (weight / height /height) * 10000;

  //format decimal value
  let bmiValue = +bmi.toFixed(1);

   let bmiResult = document.getElementById('bmi');
   

  if (bmiValue < 18.5) {
    bmiResult.innerHTML = `underweight (${bmiValue})`;
  } else if (bmiValue > 18.5 && bmi < 24.9) {
    bmiResult.innerHTML = `Normal (${bmiValue})`;
  } else if (bmiValue > 25 && bmi < 29.9) {
    bmiResult.innerHTML = `Overweight (${bmiValue})`;
  } else {
    bmiResult.innerHTML = `Obese (${bmiValue})`;
  }



  console.log(bmiValue);
}

 let submit = document.getElementById('submit');
 submit.addEventListener('click', calculateBMI);

// calculateBMI();