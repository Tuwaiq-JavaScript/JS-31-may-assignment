
// {id:2,Name:Omar,age:22,level:beginner,tasksCompleted:2},
// {id:3,Name:Sarah,age:20,level:beginner,tasksCompleted:4},
// {id:4,Name:Saleh,age:15,level:intermediate,tasksCompleted:6},
// {id:5,Name:Saud,age:30,level:advanced,tasksCompleted:10},
// {id:6,Name:Amani,age:25,level:advanced,tasksCompleted:10},
// {id:7,Name:Lojain,age:23,level:advanced,tasksCompleted:10}

// all information you allredy given

let information = [
  { id: 1, Name: "Mohammed", age: 18, level: "intermediate", tasksCompleted: 8 },
  { id: 2, Name: "Omar", age: 20, level: "beginner", tasksCompleted: 4 },
  { id: 3, Name: "Sarah", age: 20, level: "beginner", tasksCompleted: 4 },
  { id: 4, Name: "Saleh", age: 15, level: "intermediate", tasksCompleted: 6 },
  { id: 5, Name: "Saud", age: 30, level: "advanced", tasksCompleted: 10 },
  { id: 6, Name: "Amani", age: 25, level: "advanced", tasksCompleted: 10 },
  { id: 7, Name: "Lojain", age: 23, level: "advanced", tasksCompleted: 10 },
]

// display every person with their age and tasks completed in a sentence
console.log("--------------------------------------")
console.log("display every person with their age and tasks completed in a sentence")
console.log("--------------------------------------")


const taskcomplated = information.filter(information => information.tasksCompleted >= 5)
console.log(taskcomplated)



console.log("--------------------------------------")
console.log("pepole their tasks highest to lower")
console.log("--------------------------------------")


information.sort(sorting)
console.log(information)
function sorting(compareS, compareT){
  return compareT.tasksCompleted - compareS.tasksCompleted
}

console.log("--------------------------------------")
console.log("pepole they are 25 or older")
console.log("--------------------------------------")

let OldAge = information.filter (information => information.age >= 25)
console.log(OldAge)

console.log("--------------------------------------")
console.log("pepole they passed")
console.log("--------------------------------------")

let Passed ;
let passed = information.filter(information => information.tasksCompleted >= 5)
.map(information => ({...information, Stat:"Passed"}))
console.log(passed)

