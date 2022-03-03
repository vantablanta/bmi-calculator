//bmi calculation weight divide by height in m**
let firstName = prompt("What is your name")
let weight = prompt("What is your weight in Kgs")
let height = prompt("What is your height in centimeters")

//html linking 
let userName = document.getElementById("name");
let userHeight = document.getElementById("height");
let userWeight = document.getElementById("weight")


//linking html to prompts given 
userName.textContent = `Name: ${firstName}`;
userHeight.textContent = `Height: ${height}`;
userWeight.textContent = `Weight: ${weight}`;

//calculate bmi
function bmiCalculator(weight, height){
    //convert cm to meter and square 
    const heightInMeters = ((parseInt(height)/100).toFixed(1))**2
    weight= parseInt(weight)
    //link to html
    let bmiResult = document.getElementById("bmi")
    // get rid of non conforming values
    if (isNaN(height) && isNaN(weight)){
        bmiResult.textContent = 'You provided wrong weight or height values'
        //add this css if conditions are met
        bmiResult.classList.add("is-not-number")
        //when values are numbers 
    }else{
        let result = (weight / heightInMeters).toFixed(1)    
        // Underweight (Below 18.5) · Normal (18.5 - 24.9) · Overweight (25.0 - 29.9)  
        bmiResult.textContent = ` Result: ${result}`
        let verifyBmi = document.getElementById('bmi-verify')
        if (result > 1 && result < 18.5){
            verifyBmi.textContent = "Underweight"
            //css for underweight. add if conditions are met 
            verifyBmi.classList.add("underweight")
        }else if (result > 25.0 && result < 29.9){
            verifyBmi.textContent = "Overweight"
            //css for overweight. add if conditions are met
            verifyBmi.classList.add("overweight")
        }else if (result > 18.5 && result < 25.0){
            verifyBmi.textContent = "Healthy"
            //css for healthy add if conditions are met 
            verifyBmi.classList.add("healthy")
        } else {
            verifyBmi.textContent = "Provide correct values."
            //css for abnormal numbers provided
            verifyBmi.classList.add("incorrect-numbers")
        }
    }
};
bmiCalculator(weight, height)