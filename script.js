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
        bmiResult.style.backgroundColor = 'red'
        bmiResult.style.fontSize= '30px'
        bmiResult.style.textAlign = 'center'
        bmiResult.style.width = '550px'
        //when values are numbers 
    }else{
        let result = (weight / heightInMeters).toFixed(1)  
        bmiResult.textContent = ` Result: ${result}`
        let verifyBmi = document.getElementById('bmi-verify')
        if (result > 1 && result < 18.5){
            verifyBmi.textContent = "Underweight"
            verifyBmi.style.backgroundColor = "red"
            verifyBmi.style.fontSize = "30px"
            verifyBmi.style.textAlign = "center"
            verifyBmi.style.height = '50px'
            verifyBmi.style.marginTop = "30px"
        }else if (result > 25.0 && result < 29.9){
            verifyBmi.textContent = "Overweight"
            verifyBmi.style.backgroundColor = "yellow"
            verifyBmi.style.fontSize = "30px"
            verifyBmi.style.textAlign = "center"
            verifyBmi.style.height = '50px'
            verifyBmi.style.marginTop = "30px"
        }else if (result > 18.5 && result < 25.0){
            verifyBmi.textContent = "Healthy"
            verifyBmi.style.backgroundColor = "green"
            verifyBmi.style.fontSize = "30px"
            verifyBmi.style.textAlign = "center"
            verifyBmi.style.height = '50px'
            verifyBmi.style.marginTop = "30px"
        } else {
            verifyBmi.textContent = "Provide correct values."
            verifyBmi.style.backgroundColor = "blue"
            verifyBmi.style.fontSize = "30px"
            verifyBmi.style.textAlign = "center"
            verifyBmi.style.height = '50px'
            verifyBmi.style.marginTop = "30px"
        }


        // Underweight (Below 18.5) · Normal (18.5 - 24.9) · Overweight (25.0 - 29.9) 
    }



};
bmiCalculator(weight, height)