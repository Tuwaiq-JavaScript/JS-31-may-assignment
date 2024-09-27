const readline = require ('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const array = ['+', '-', '*', '/'];

readline.question ('give the first number! ' ,(FirstInput) => {
const firstNmber = Number(FirstInput);
if(isNaN(firstNmber)){
console.log("This is not Number!")
return readline.close();
}

readline.question ('what do like to do? ' ,(operations) => {
if(!array.includes(operations)){
    console.log("You are in wroooong way!!!")
     return readline.close();
    }


readline.question('Put the second number!', (SecondInput) => {
    const SecondNumber = Number(SecondInput);
    if(isNaN(SecondNumber)){
        console.log("This is not number!")
        return readline.close();

    }
    const result = culcolat(firstNmber, operations, SecondNumber);
    console.log(result)
    readline.close();
})

})


})  
function culcolat(firstNmber, array, SeconNumber){
if (array === '+') return firstNmber + SeconNumber;
else if (array === '-') return firstNmber - SeconNumber;
else if (array === '*') return firstNmber * SeconNumber;
else if (array === '/') return firstNmber / SeconNumber;
}
