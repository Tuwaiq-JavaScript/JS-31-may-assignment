var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processSum() {
   rl.question(`ennter for res`,input=>{
    if(input=="1"){
        sum();
    }else if(input=="2"){
        sub();

    }else if(input=="3"){
        mulit();

    }else if(input=="4"){
        div();
    }

   });

    console.log('The result is is');
}
function sum(){
rl.question('Enter a number: ', function (x) {
    rl.question('Enter another number: ', function (y) {
        var res = parseFloat(x) + parseFloat(y);

        console.log(`the resault is`, res)

        rl.close();
    });
});

}function sub(){
    rl.question('Enter a number: ', function (x) {
        rl.question('Enter another number: ', function (y) {
            var res = parseFloat(x) - parseFloat(y);
    
            console.log(`the resault is`, res)
    
            rl.close();
        });
    });
    
    }
    function mulit(){
        rl.question('Enter a number: ', function (x) {
            rl.question('Enter another number: ', function (y) {
                var res = parseFloat(x) * parseFloat(y);
        
                console.log(`the resault is`, res)
        
                rl.close();
            });
        });
        
        }
        function div(){
            rl.question('Enter a number: ', function (x) {
                rl.question('Enter another number: ', function (y) {
                    var res = parseFloat(x) / parseFloat(y);
            
                    console.log(`the resault is`, res)
            
                    rl.close();
                });
            });
            
            }
            processSum();

            