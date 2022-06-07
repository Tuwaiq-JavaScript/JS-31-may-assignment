

//Q2
const person =[ 
{ id:1,
  Name:'Mohammed',
  age:18,
  level:'intermediate',
  tasksCompleted:8 },
{   id:2,
    Name:'Omar',
    age:22,
    level:'beginner',
    tasksCompleted:2 },
{   id:3,
    Name:'Sarah',
    age:20,
    level:'beginner',
    tasksCompleted:4 },
{   id:4,
    Name:'Saleh',
    age:15,
    level:'intermediate',
    tasksCompleted:6 },
{    id:5,
     Name:'Saud',
     age:30,
     level:'advanced',
     tasksCompleted:10 },
{    id:6,
     Name:'Amani',
     age:25,
     level:'advanced',
     tasksCompleted:10 },
{    id:7,
     Name:'Lojain',
     age:23,
     level:'advanced',
     tasksCompleted:10 }
];
//Q1
console.log('display every person with their age and tasks completed');
const task = person.map( item => 
    ( { age:item.age ,tasksCompleted: item.tasksCompleted}))

//Q2 sort them in the order of completed tasks from higher to lower
console.log('order of completed tasks from higher to lower');
person.sort((lower, higher) => {
    return  higher.tasksCompleted - lower.tasksCompleted ;
});
console.log(person);

//Q3 display only people who are 25 or older
console.log('display only people who are 25 or older');
const ageGreater25 = person.filter(person => {
    return person.age >=25;
})
console.log(ageGreater25);

//Q4
for( i=0 ; i < person.length ; i++){
if(person[i].tasksCompleted > 5){
    person.push(ttt='pass');
     console.log(person);
}
};



