//Q1-chess 
let board = ""
let rows = 0
let numbers = []
let carter = ["  a", "b", "c", "d", "e", "f", "g", "h"]
console.log(carter.join("" + " "))

while (rows <= 8) {
  let cols = 0
  let number = 0

  let previousHashed

  if (rows % 2 === 0) {
    previousHashed = true
  } else {
    previousHashed = false
  }

  while (cols <= 8) {
    if (previousHashed) {
      board += " |"
      number+="2"
    } else {
      board += " |"
    }

    previousHashed = !previousHashed

    cols++
  }
  

  
  board += rows + " \n" 
  board += "------------------"
  board += "\n"

  rows++
}
// insertColumnAtRight()
console.log(board)

//Q2-•	display every person with their age and tasks completed in a sentence
const person = student.filter(nperson.age && nperson.tasksCompleted >= 10);
console.log(person);

//•	sort them in the order of completed tasks from higher to lower
console.log(student.sort(a.b) => b.taskcompleted-a.taskCompleted ));

//•	display only people who are 25 or older
const personAge = student.filter (nage => nage.age >=25);
//•	add a new property to each person that expresses if they passed or not ( 5 or more completed tasks = passed, less than 5 = not passed)
let Passed ;
let passed = student.filter(information => information.tasksCompleted >= 5)
.map(information => ({...information, Stat:"Passed"}))
console.log(passed)

//1.write a program that counts the number of characters 
function getCounts(string){
    const histogram={};
    for (let i=0 ; i < string.length; i++){
        const ch=string[i];
        if (!histogram[ch]){
            histogram[ch]=0;
        }
        histogram[ch]++;
        }
        return histogram;
}
console.log(getCounts("somplace over the rainbow"));

//in the following items there are missing prices, 
const Obj = 

{Milk : 8,
Papers:17,
Egg:null,
Cheese:null,
Tissues:null,
Biscuits:null,
Banana:null,
water:null,
Bakery:null,
Bread:null,
Meat :null,
Seafood:null,
Pasta :null,
Rice:null,
Oil:null,
Sauces:null,
Salad:null,
Cereals:null,
Soups :null,
Canned_Goods:null,
Frozen_Foods:null,
Dairy:null}





    Object.keys(Obj).map(function(key, index) {
        
        if( Obj[key] == null){
            
            Obj[key] = (key.length)*2;
        }
        });
    

         console.log(Obj)

//given these array change it's structure 
const employe = [
    {name:"Maram", age: 25, jobs:"project manager ", hopy:"swimming"},
    {name:"Khaild", age: 30, jobs:"engineer ", hopy:"chess"},
    {name:"Mohammed", age: 20, jobs:"accountent ", hopy:"eating"},
    
]