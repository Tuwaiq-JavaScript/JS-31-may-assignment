const data = [
  {
    id: 1,
    Name: "Mohammed",
    age: 18,
    level: "intermediate",
    tasksCompleted: 8,
  },
  { id: 2, Name: "Omar", age: 22, level: "beginner", tasksCompleted: 2 },
  { id: 3, Name: "Sarah", age: 20, level: "beginner", tasksCompleted: 4 },
  { id: 4, Name: "Saleh", age: 15, level: "intermediate", tasksCompleted: 6 },
  { id: 5, Name: "Saud", age: 30, level: "advanced", tasksCompleted: 10 },
  { id: 6, Name: "Amani", age: 25, level: "advanced", tasksCompleted: 10 },
  { id: 7, Name: "Lojain", age: 23, level: "advanced", tasksCompleted: 10 },
];

//first task
data.map((item) => {
  console.log(
    `${item.Name} is ${item.age} years old and has completed ${item.tasksCompleted} tasks`
  );
});

console.log("---------------------------------");

//second task
console.log(
  data.sort((item1, item2) => item2.tasksCompleted - item1.tasksCompleted)
);

console.log("---------------------------------");

//third task
console.log(data.filter((item) => item.age >= 25));

console.log("---------------------------------");

//forth task

console.log(
  data.map((item) => {
    item.advancement = item.tasksCompleted > 5 ? "passed" : "not passed";
    return item;
  })
);
