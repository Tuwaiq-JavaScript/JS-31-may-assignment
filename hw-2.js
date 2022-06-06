const x =require("prompt-sync");
const prompt= x ();

const obj =[

    {'id':1,'Name':'Mohammed','age':18,'level':'intermediate','tasksCompleted':8},
    {'id':2,'Name':'Omar','age':22,'level':'beginner','tasksCompleted':2},
    {'id':3,'Name':'Sarah','age':20,'level':'beginner','tasksCompleted':4},
    {'id':4,'Name':'Saleh','age':15,'level':'intermediate','tasksCompleted':6},
    {'id':5,'Name':'Saud','age':30,'level':'advanced','tasksCompleted':10},
    {'id':6,'Name':'Amani','age':25,'level':'advanced','tasksCompleted':10},
    {'id':7,'Name':'Lojain','age':23,'level':'advanced','tasksCompleted':10}



];
//********************************************** */
//1-to get values
/*for (let value of obj.values()) {
//display every person with their age and tasks completed in a sentence 
console.log('the age is : '+ value.age +' number of task completed is:  '+value.tasksCompleted);}*/

//**************************************************** */
//2-sort them in the order of completed tasks from higher to lower
/*function so(a,b){
    return(b.tasksCompleted)-(a.tasksCompleted)};
console.log(obj.sort(so));*/

//******************************************************* */
      //3-display only people who are 25 or older
      /*for (let value of obj.values()){
      if(value.age >=25)
      console.log(value);};*/
//************************************************************ */
      //4 or more completed tasks = passed, less than 5 = not passed)

        obj.forEach(object=>{
           if(object.tasksCompleted>=5){
           object.result='pass'; 
           }
           else if(object.tasksCompleted<5){
            object.result='not pass'; 
           }


        })
 console.log(obj);


      
     
          

   
//************************************************************* */
     //cil program 
     /*console.log("Enter 1 For Addition:")
    console.log("Enter 2 For Subtraction:")
    console.log("Enter 3 For Multiplication:")
    console.log("Enter 4 For Division :")
    ch = parseInt(prompt("Enter your choice:"))
const o = parseInt(prompt('Enter the first number '));
const y = parseInt(prompt('Enter the second number '));

switch(ch) {
   case 1:
   w = o + y;
   console.log("\nResult is :" + w)
   break;
   case 2:
      w = o - y;
      console.log("\nResult is :" + w)
      break;
      case 3:
         w = o * y;
         console.log("\nResult is :" + w)
         break;
         case 4:
            w = o / y;
           console.log("\nResult is :" + w)
           break;
         }*/
         //*********************************************** */
         
        /*let str =' someplace Over the rainbow'
         let counts = {};
let ch, index, len, count;
// Loop through the string.
for (index = 0, len = str.length; index < len; ++index) {
   // Get this character
   ch = str.charAt(index);

   // Get the count for it

    count = counts[ch];
     // If we have one, store that count plus one
    counts[ch] = count ? count + 1 : 1;
   }

   for (ch in counts) {
      console.log(ch + " there is " + counts[ch]);
  }*/




          
         
     

    
    
        

    



    
