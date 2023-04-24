
// get values form the inputs
function getValues() {
    let startValue = document.getElementById("startValue").value
    let endValue = document.getElementById("endValue").value
}

//generate numbers from startValue to endValue
let numbers = generateNumbers(startValue, endValue);

function generateNumbers(sValue, eValue){
    let numbers = [];
    for(let i=sValue; i<=eValue; i++){
        numbers.push(index);
    }
    
    return numbers;
}

//display numbers and mark even numbers bold
function displayNumbers() {

}