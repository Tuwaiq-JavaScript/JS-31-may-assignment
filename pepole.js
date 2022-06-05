var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contuser(){
    
    rl.question(`Enter 1 for display all emp\n 2:for sort them \n 3:show older pepole 4:5 or more passed `, input=>{
        if(input=="1"){ 
            showall();
         rl.close();
            }else if(input=="2"){
            sortbytask();
        }else if(input=="3"){
        agechecker();
        }else if(input=="4"){
            taskpasser();
        }
        
       
   
        });
      

}

var emplist=[{id:1,Name:"Mohammed",age:18,level:"intermediate",tasksCompleted:8},
    {id:2,Name:"Omar",age:22,level:"beginner",tasksCompleted:2},
    {id:3,Name:"Sarah",age:20,level:"beginner",tasksCompleted:4},
    {id:4,Name:"Saleh",age:15,level:"intermediate",tasksCompleted:6},
    {id:5,Name:"Saud",age:30,level:"advanced",tasksCompleted:10},
    {id:6,Name:"Amani",age:25,level:"advanced",tasksCompleted:10},
    {id:7,Name:"Lojain",age:23,level:"advanced",tasksCompleted:10}];


//to show all
function showall(){
    for(var item of emplist){
        console.log(item);
    }
}
 //to get age 25 or more

 function agechecker(){
    for(var item of emplist){
        if(item.age>=25){
            console.log(item);
        }
    }
//sorrt the emplist by task

 }
 function sortbytask(){
    emplist.sort(function(a,b){
        return b.tasksCompleted-a.tasksCompleted;
    });

    console.log("--------------------------")
    console.log(emplist);
    }
    //task completed more than 5
function taskpasser(){
    for(var item of emplist){
        if(item.tasksCompleted>=5){
            console.log(item);
        }
    }
    console.log("--------------------------");
    console.log("passed 5 tasks");
}
contuser();

    