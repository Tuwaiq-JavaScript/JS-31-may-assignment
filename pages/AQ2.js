

var obj=[
//key , objectName.key

    {   id:1,
        Name:"Mohammed",
        age:18,
         level:"intermediate",
         tasksCompleted:8},

    {    id:2,
        Name:"Omar",
        age:22,
        level:"beginner",
        tasksCompleted:2},
    {id:3,
        Name:"Sarah",
        age:20,
        level:"beginner",
        tasksCompleted:4},
    {id:4,
        Name:"Saleh",
        age:15,
        level:"intermediate",
        tasksCompleted:6},

    {   id:5,
        Name:"Saud",
        age:30,
        level:"advanced",
        tasksCompleted:10},

    {   id:6,
        Name:"Amani",
        age:25,
        level:"advanced",
        tasksCompleted:10},

    {   id:7,
        Name:"Lojain",
        age:23,
        level:"advanced",
        tasksCompleted:10},


];

////1-display every person with their age and tasks completed in a sentence
//alert(JSON.stringify(obj, null, 4));
console.log(obj[0].Name,obj[0].age,obj[0].tasksCompleted);
console.log(obj[1].Name,obj[1].age,obj[1].tasksCompleted);
console.log(obj[2].Name,obj[2].age,obj[2].tasksCompleted);
console.log(obj[3].Name,obj[3].age,obj[3].tasksCompleted); 
console.log(obj[4].Name,obj[4].age,obj[4].tasksCompleted); 
console.log(obj[5].Name,obj[5].age,obj[5].tasksCompleted); 
console.log(obj[6].Name,obj[6].age,obj[6].tasksCompleted);   



///2- sort them in the order of completed tasks from higher to lower
//obj.sort((a, b) => parseFloat(b.tasksCompleted) - parseFloat(a.tasksCompleted));

//obj.sort(function(a,b){
   //return a.tasksCompleted.valueOf() <  b.tasksCompleted.valueOf() ;

var sol = obj.sort((a,b) => b.tasksCompleted-a.tasksCompleted);
console.log(sol);


///3-display only people who are 25 or older
for (let i = 0; i<obj.length; i++){

    if(obj[i].age>= 25){
      // document.write(obj[i].Name);
        console.log(obj[i].Name);
    }
} 

///4- add a new property to each person that expresses if they passed or not ( 5 or more completed tasks = passed, less than 5 = not passed)


//obj.forEach((element) =>{

   // if (tasksCompleted >=5)
   // element.passed = "passed";
    for (let i = 0; i<obj.length; i++){
        if (obj[i].tasksCompleted>=5){

            (obj[i].passed="yes");  
        }
        else{ (obj[i].passed="no");}

    }
    
   // element.passed = " Notpassed";
console.log(obj); 
