let person=[
    {id: 1, Name: 'Mohammed', age: 18, level: 'intermediate', tasksCompleted: 8},
    {id: 2, Name: 'Omar', age: 22, level: 'beginner', tasksCompleted: 2},
    {id: 3, Name: 'Sarah', age: 20, level: 'beginner', tasksCompleted: 4},
    {id: 4, Name: 'Saleh', age: 15, level: 'intermediate', tasksCompleted: 6},
    {id: 5, Name: 'Saud', age: 30, level: 'advanced', tasksCompleted: 10},
    {id: 8, Name: 'Amani', age: 25, level: 'advanced', tasksCompleted: 10},
    {id: 7, Name: 'Lojain', age: 23, level: 'advanced', tasksCompleted: 10}];
    
    printInfo(person);
    sortTask(person);
    olderThan25(person);
    passOrNotpass(person);
    
    //display every person with their age and tasks completed in a sentence
    function printInfo(array){
        console.log(array);
    }
    
    //sort them in the order of completed tasks from higher to lower
    function sortTask(array){
        array.sort((a, b) => parseFloat(b.tasksCompleted) - parseFloat(a.tasksCompleted));
        console.log(array); 
    }
    
    //display only people who are 25 or older
    function olderThan25(arr){
        for(let i=0;i<arr.length;i++){
            if(arr[i].age >= 25)
             console.log(arr[i]);
        }
    }
    
    //add a new property to each person that expresses if they passed or not
    function passOrNotpass(arr){   
        for(let i=0;i<arr.length;i++){
            if(arr[i].tasksCompleted >= 5){
             arr[i].Status ='passed';}
            else{
              arr[i].Status ='not passed';}
        }
    }
    
    