
document.getElementById(`myBtn`).onclick = function(){
    const myCheckbox = document.getElementById(`myCheckbox`)
    const visaBtn = document.getElementById(`visaBtn`)
    const paypalBtn = document.getElementById(`paypalBtn`)
    const mastercardBtn = document.getElementById(`mastercardBtn`)

    if(myCheckbox.checked){
        console.log(`You are subscribed`);
    }
    else{
        console.log(`You are NOT subscribed`);
        
    }
    
    if(visaBtn.checked){
        console.log(`You pay with Visa!`);
        
    }
    else if(mastercardBtn.checked){
        console.log(`You pay with Mastercard!`);
        
    }
    else if(paypalBtn.checked){
        
        console.log(`You Pay with Paypal!`);
    }else{
        console.log(`Why not pay, or you do cash?`)
    }
}