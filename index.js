const temparatureButtonEl = document.getElementById("temparatureButton");
const temparatureValueEl = document.getElementById("temparatureValue");
let messageEl = document.getElementById("message");
let inputTemparatureEl = document.getElementById("inputTemparature");
const resetBtnEl = document.getElementById("resetBtn");
const errorMsgEl = document.getElementById("error")

temparatureButtonEl.addEventListener("click", function(event){
    errorMsgEl.textContent = "";
    messageEl.textContent = "";
    const celToFah = (temp)=>{
        return ((temp - 32) * (5/9)).toFixed(2) ;
    }
    const celToKel = (temp)=>{
        let kelvinTemp = (temp - 273.15).toFixed(2);
        return kelvinTemp
    }
    if (inputTemparatureEl.value === ""){
        alert("Enter a valid input!!");
    }else{
        if(temparatureValueEl.value === "Celsius"){
            let result = (inputTemparatureEl.value) * 1;
            if (isNaN(result) === false){
                messageEl.textContent = result+ " \u00B0C";
            }else{
                errorMsgEl.textContent = "Enter a valid Number";
            }
        }
        else if(temparatureValueEl.value === "Fahrenheit"){
            let result = celToFah(inputTemparatureEl.value);
            if (result === "NaN"){
                errorMsgEl.textContent = "Enter a valid Number";
            }else{
                messageEl.textContent = celToFah(inputTemparatureEl.value) + " \u00B0C";
            }
            
        }
        else if(temparatureValueEl.value === "Kelvin"){
            let result = celToKel(inputTemparatureEl.value);
            if ((result) === "NaN"){
                errorMsgEl.textContent = "Enter a valid Number";
            }else{
                messageEl.textContent = celToKel(inputTemparatureEl.value) + " \u00B0C";
            }
            
        }
    }
});


resetBtnEl.addEventListener("click", function(event){
    inputTemparatureEl.value = "";
    messageEl.textContent = "";
    errorMsgEl.textContent ="";
});