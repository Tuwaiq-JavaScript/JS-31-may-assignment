const studentsInfo=[
    {id:1,Name:'Mohammed',age:18,level:'intermediate',tasksCompleted:8},

    {id:2,Name:'Omar',age:22,level:'beginner',tasksCompleted:2},

    {id:3,Name:'Sarah',age:20,level:'beginner',tasksCompleted:4},

    {id:4,Name:'Saleh',age:15,level:'intermediate',tasksCompleted:6},

    {id:5,Name:'Saud',age:30,level:'advanced',tasksCompleted:10},

    {id:6,Name:'Amani',age:25,level:'advanced',tasksCompleted:10},

    {id:7,Name:'Lojain',age:23, level:'advanced',tasksCompleted:10}]
 //display every person with their age and tasks completed in a sentence

    
  /studentsInfo.map(x => console.log('{age :' + x.age + ' '+'TasksCompleted : ' + x.tasksCompleted +' }'));


  //sort them in the order of completed tasks from higher to lower
let sortTheTasks = studentsInfo.sort(({tasksCompleted:a}, {tasksCompleted:b}) => b-a);
    console.log(sortTheTasks);

//display only people who are 25 or older
 let ageAdult=studentsInfo.filter(studentsInfo=>studentsInfo.age>=25);
    console.log(ageAdult);

/*add a new property to each person that expresses 
if they passed ornot ( 5 or more completed tasks = passed, less than 5 = not passed)*/

    for(let i=0;i< studentsInfo.length;i++){
        if(studentsInfo[i].tasksCompleted >=5){
            studentsInfo[i].grade = 'passed';
        }
        else{
            studentsInfo[i].grade = 'Failed'
        }
    }