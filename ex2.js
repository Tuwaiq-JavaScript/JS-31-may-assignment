//at weekend
///define objects 
const emp=[
{id:1,Name:'Mohammed',age:18,level:'intermediate',tasksCompleted:8},
{id:2,Name:'Omar',age:22,level:'beginner',tasksCompleted:2},
{id:3,Name:'Sarah',age:20,level:'beginner',tasksCompleted:4},
{id:4,Name:'Saleh',age:15,level:'intermediate',tasksCompleted:6},
{id:5,Name:'Saud',age:30,level:'advanced',tasksCompleted:10},
{id:6,Name:'Amani',age:25,level:'advanced',tasksCompleted:10},
{id:7,Name:'Lojain',age:23,level:'advanced',tasksCompleted:10}]

//console.log(emp)

let task=[]
for(let i =0;i<emp.length;i++){
   if(emp[i].tasksCompleted>=10){
    console.log( emp[i])
   }
   else if(emp[i].tasksCompleted>=8 && emp[i].tasksCompleted<10){
    console.log(emp[i])
   }
   else if(emp[i].tasksCompleted>=6 && emp[i].tasksCompleted<8){
    console.log(emp[i])
   }
   else if(emp[i].tasksCompleted>=4 && emp[i].tasksCompleted<6){
    console.log(emp[i])
   }
   else if(emp[i].tasksCompleted>=2 && emp[i].tasksCompleted<4){
    console.log(emp[i])
   }
//    allUsers.push(users[key]);

    //if(emp.tasksCompleted>=10){
    //}
    //  task=emp.tasksCompleted[i]
    // console.log(`tasksCompleted  ${task.sort}`)

}//console.log(task)

// for(let max of task){

// }
// function print(){
//     for(const i of emp){
        
//     }
//}
//print()