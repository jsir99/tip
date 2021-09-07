const billInput = document.querySelector('#billform input')
const tipOptions = document.getElementsByName('tip-percent')
const numberPeopleForm = document.querySelector('#numberpeopleform')
const numberPeopleInput = document.querySelector('#number-people input')
const errorMsg = document.querySelector('#numberpeopleform > span')
const tipSpan = document.querySelector('#tip-amount .amount')
const totalSpan = document.querySelector('#total .amount')
const resetBtn = document.querySelector('#reset button')

let bill = 0;
let tip = 0.15;
let numberPeople = 1;

function updateMaths(){
    let tipAmountPP = bill*tip/numberPeople;
    let totalPP = bill*(1+tip)/numberPeople;
    tipSpan.innerText = `$${tipAmountPP.toFixed(2)}`
    totalSpan.innerText = `$${totalPP.toFixed(2)}`
}
function toggleError(){
    numberPeopleForm.classList.toggle("error")
    errorMsg.classList.toggle("error-msg")
}


function updateTip(e){
    tip = parseFloat(this.value)
    updateMaths()
}
tipOptions.forEach(tipOption => tipOption.addEventListener('change', updateTip));

billInput.addEventListener('keyup', (e) =>{
        bill = parseFloat(billInput.value);
        updateMaths()
})

numberPeopleInput.addEventListener('change', function(e){
    if(parseInt(this.value) === 0){
     toggleError()
     return;   
    }
    if (numberPeopleForm.classList.contains('error')) {
        numberPeopleForm.classList.toggle('error')
        errorMsg.classList.toggle('error-msg')
    }
    numberPeople = parseInt(numberPeopleInput.value)
    updateMaths()
})

resetBtn.addEventListener('click', (e)=>location.reload())