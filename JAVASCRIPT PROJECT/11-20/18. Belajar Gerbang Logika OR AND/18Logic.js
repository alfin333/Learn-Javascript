// Give us the ability to check more than 1 condition concurrently
// && AND (BOTH condition must be true)
// || OR (EITHER condition must be true)

let temp = 15;

if(temp > 0 && temp < 30){
    console.log(temp,`The weather is good!`)
}
else{
    
    console.log(temp,`The weather is Bad!`)
}

let temp2 = -21;

if(temp2 <= 0 || temp >= 30){
    console.log(temp2, `The weather is good!`)
}
else{
    
    console.log(temp2, `The weather is Bad!`)
}