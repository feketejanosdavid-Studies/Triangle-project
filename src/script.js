const sideInput = document.querySelector("#side")
const heightInput = document.querySelector("#height")
const resultInput = document.querySelector("#result")
const submitButton = document.querySelector("#submit")
const resultList = document.getElementById('list')

submitButton.addEventListener('click', () => {startCalc()})

function startCalc()
{
       let side = Number(sideInput.value)
       let height = Number(heightInput.value)
       let result = Number(calcResult(side,height))
       resultInput.value = result.toFixed(2)
       resultList.innerHTML+=side+', '+height+', '+result.toFixed(2)+'<br>'
       
}

function calcResult(side,height)
{
    return (side*height)/2
}

