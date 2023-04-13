const temparatureButtonEl = document.getElementById("temparatureButton");
const temparatureValueEl = document.getElementById("temparatureValue");
let messageEl = document.getElementById("message");
let inputTemparatureEl = document.getElementById("inputTemparature");


temparatureButtonEl.addEventListener("click", function(event){
    const convertedTemparatureValue = parseInt(inputTemparatureEl.value);
    if (typeof(convertedTemparatureValue) === typeof(4)){
        if(temparatureValueEl.value === "Celsius"){
            messageEl.textContent = inputTemparatureEl.value + " °C";
        }
        else if(temparatureValueEl.value === "Fahrenheit"){
            let fahrenheitTemp = (convertedTemparatureValue-32) *(5/9);
            messageEl.textContent = fahrenheitTemp +" °C";
        }
        else if(temparatureValueEl.value === "Kelvin"){
            let kelvinTemp = convertedTemparatureValue - 273.15;
            messageEl.textContent = kelvinTemp + " °C";
        }
    }
    else{
        alert("Enter a valid input");
    }
});