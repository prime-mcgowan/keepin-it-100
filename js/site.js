
// get values form the inputs
function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
  
    //validate our input (parse then check)
    //will make sure numbers are looked at as integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue)

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
         //call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        //call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter numbers")
    }   
}

    function displayNumbers(numbers) {
        let templateRows= "";

        for (let index = 0; index < numbers.length; index++) {

            let number = numbers[index];
            templateRows += `<tr><td>${number}</td></tr>`;   
        }
        document.getElementById("results").innerHTML = templateRows;
    }


//generate numbers from startValue to endValue
function generateNumbers(sValue, eValue){
    let numbers = [];
    for(let i=sValue; i<=eValue; i++){
        numbers.push(i);
    }
    
    return numbers;
}

//display numbers and mark even numbers bold

