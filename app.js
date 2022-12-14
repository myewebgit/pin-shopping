function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
    // console.log(event.target)// event.target----- shows which button we pressed....with div detail
    // console.log(event.target.innerText)// event.target----- shows which button we pressed....only number or text 

    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');

    if(isNaN(number)){
        // console.log(number);// check the condition
        if(number == 'C'){  
            calcInput.value = ''; // to clean all input number 
        }
        
    }
    else{
        
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
    
})

function verifyPin(){
    
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const errorMessage = document.getElementById('notify-fail');
    // console.log('going to verify')// check submit button
    if(pin == typedNumbers){
        document.getElementById('next').addEventListener('click',function(){
            document.body.style.backgroundColor = 'red';
            window.location.href= 'next.html';
        })
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    }
    else{
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    }
}

