let personalIformation=[
    {
       id:1 ,  
       name: 'Mohammed',
       age:   18 ,
       level:  'intermeddiate',
       tasksCompleted:8
    
    },
    {
       id: 2,  
       name: "Omar",
       age:  22  ,
       level:  'beginner',
       tasksCompleted:2
    },
    {
       id: 3,  
       name: 'Sarah',
       age:  20  ,
       level:  'beginner',
       tasksCompleted:4
    },
    {
       id: 4,  
       name: 'Saleh',
       age:   15 ,
       level: 'intermeddiate' ,
       tasksCompleted:6
    },
    {
       id: 5,  
       name: 'saud',
       age: 30   ,
       level: 'advanced' ,
       tasksCompleted:10
    },
    {
       id: 6,  
       name: 'Amani',
       age:  25  ,
       level: 'advanced' ,
       tasksCompleted:10
    },
    {
       id: 7,  
       name: 'Lojain',
       age:    23,
       level:  'advanced',
       tasksCompleted:10
    }
 
    ]
    
 
 //Q1
 //display every person with their age and tasks completed in a sentence
   personalIformation.forEach(element => console.log('{age :' + element.age + ' '+'TasksCompleted : ' + element.tasksCompleted +' }'));
 //----------------------------
 
 //Q2
 //sort them in the order of completed tasks from higher to lower
 personalIformation.sort((a,b) => {//
    return b.tasksCompleted - a.tasksCompleted
 });
 personalIformation.forEach((e) => {
    console.log(`${e.id}  ${e.name}  ${e.age} ${e.level} ${e.tasksCompleted}`)
 });
 
 //----------------------------
 
 //Q3
 
 //display only people who are 25 or older
 let arrAge= personalIformation.filter(personalIformation=> personalIformation.age>=25);
 console.log(arrAge);
 //--------------------------------
 
 
 //Q4add a new property to each person that expresses if they passed or not ( 5 or more completed tasks = passed, less than 5 = not passed)
 for(let i=0;i<personalIformation.length;i++){
    if(personalIformation[i].tasksCompleted>=5){
       personalIformation[i].passed='you Pass';
    }
    else{
       personalIformation[i].passed='you Not Pass';
    }
 }
 console.log(personalIformation);