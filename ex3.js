function calculate(){
    
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question("enter first number ", function(n1) {
            rl.question("Enter the calculation ", function(op) {
                rl.question("ِenter second number  ", function(n2) {
                    num1=parseInt(n1)
                    num2=parseInt(n2)

                    if(op ==='+'){
                        
                        let res=num1+num2;
                        console.log(`${n1} ${op} ${n2} = ${res}`);
                        
                    }
                    else if(op ==='X'){
                        
                        let res=num1*num2;
                        console.log(`${n1} ${op} ${n2} = ${res}`);
                        
                    }
                    else if(op ==='-'){
                        
                        let res=num1-num2;
                        console.log(`${n1} ${op} ${n2} = ${res}`);
                        
                    }
                    else if(op ==='/'){
                        
                        let res=num1/num2;
                        console.log(`${n1} ${op} ${n2} = ${res}`);
                        
                    }
                    else{
                        console.log('wrong entry in symbol')
                    }

                    rl.question("ِDo you want try again  please write yes or no  ", function(yes_Or_no) {
                        if(yes_Or_no ==='yes'){
                            calculate();

                        }
                        
            //console.log(`${n1} ${op} ${n2} =`);
          else if(yes_Or_no ==='no'){
              console.log("thank you ")
            rl.close();
        }
        else{
            console.log('the choice uncorrect ')
            rl.close();

        }
       });
    });
    });
});
    rl.on("close", function() {
       // console.log("\nBYE BYE !!!");
        process.exit(0);
    });
}

calculate();
