// -------------------------------------- Home Work 2 

// Exercise 2 :
let persons = [
    { id:1, Name:'Mohammed',age:18, level:'intermediate',tasksCompleted:8},
    { id:2, Name:'Omar',age:22,level:'beginner',tasksCompleted:2},
    { id:3,Name:'Sarah',age:20,level:'beginner',tasksCompleted:4},
    { id:4, Name:'Saleh',age:15, level:'intermediate',tasksCompleted:6},
    { id:5, Name:'Saud',age:30,level:'advanced',tasksCompleted:10},
    { id:6, Name:'Amani',age:25,level:'advanced',tasksCompleted:10},
    { id:7,Name:'Lojain',age:23,level:'advanced',tasksCompleted:10}
  ]
  // display every person with their age and tasks completed in a sentence
  function printPerAgeandtasksCompleted() {
  for(i in persons ){
    console.log(persons[i].Name + ' ' + persons[i].age +' '+persons[i].tasksCompleted); 
  }
  }
  //sort them in the order of completed tasks from higher to lower
  function descendingOrderTask(per){
  per.sort((a, b)=> b.tasksCompleted - a.tasksCompleted);
  console.log(per);
  }


  // display only people who are 25 or older
  function displayOlder(){
    for(let i in persons){
      if(persons[i].age<=25){
        console.log(persons[i]);
      }
    }
  }
  /* add a new property to each person that expresses if they passed or not 
  ( 5 or more completed tasks = passed, less than 5 = not passed)
  */
 function addProperty(){
  for(let i=0;i<persons.length;i++){

    if(persons[i].tasksCompleted>=5){
      persons[i].evaluation='passed';
     }
    
     else{
      persons[i].evaluation='not passed';
     }
    
  }
  console.log(persons); 

 }
 console.log('-----------------------------------------')
 printPerAgeandtasksCompleted();
 console.log('-----------------------------------------')
descendingOrderTask(persons); 
 console.log('-----------------------------------------')
 displayOlder(); 
 console.log('-----------------------------------------')
 addProperty();
 
//------------------------------------------------------------------
 //Exercise 3 :
const num1=parseInt(process.argv[2]); 
const num2=parseInt(process.argv[3]); 
const oper= process.argv[4];  
function calculator(num1,num2,oper){
       if (oper=== '+'){
             console.log(num1+num2); 
        }
       else
         if (oper==='-'){
          console.log(num1-num2); 
        }
        else
         if (oper==='*'){
          console.log(num1*num2);
        }

        else if (oper==='/')
        console.log(num1/num2);
}
calculator(num1,num2,oper); 