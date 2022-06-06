const objects = [
{id:1,Name:"Mohammed",age:18,level:"intermediate",tasksCompleted:8},
{id:2,Name:"Omar",age:22,level:"beginner",tasksCompleted:2},
{id:3,Name:"Sarah",age:20,level:"beginner",tasksCompleted:4},
{id:4,Name:"Saleh",age:15,level:"intermediate",tasksCompleted:6},
{id:5,Name:"Saud",age:30,level:"advanced",tasksCompleted:10},
{id:6,Name:"Amani",age:25,level:"advanced",tasksCompleted:10},
{id:7,Name:"Lojain",age:23,level:"advanced",tasksCompleted:10}
]




// name and task
  for (const object of objects) {
      console.log("name" , object.Name ,"age" , object.age , "tasks completed" , object.tasksCompleted)
  }
// older than 25
 const older = objects.filter(function(value) {
    return value.age >= 25; });

console.log(older);

// by completed tasks
var bycompletedtasks = objects.slice(0);
bycompletedtasks.sort(function(b,a) {
    return a.tasksCompleted - b.tasksCompleted;
});

console.log(bycompletedtasks)


// pass and not passed
objects.forEach(object => {
    if(object.tasksCompleted >= 5){
    object.result=' passed'

    }
    else if (object.tasksCompleted < 5) 
    {
     object.result= 'not passed'
    }
 })
console.log(objects)