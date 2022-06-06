let letters = ['a', 'b', 'c', 'd', 'f', 'g','h'];
let arr = [[], [], [], [], [], [], [], []];

function printGame(){
    let i=1;
    for (const row of arr) {
		const line = row.join(' | ');
		console.log(line);
		console.log('--------------------------- '+ i++);
	}
}
for(let i=0;i<arr.length;i++){
    for(let j=0;j<8;j++){
     if( i==2 || i==3 || i==4 || i==5){
         arr[i][j] = " "; 
        }
     if(i == 1 || i== 6){
            arr[i][j] = "P"; 
           } 
     if(i == 0 && j == 0 || i== 7 && j==0 || i == 0 && j == 7 || i== 7 && j==7){
            arr[i][j] = "R"; 
        }   
     if(i == 0 && j == 1 || i== 7 && j==6 || i == 0 && j == 6 || i== 7 && j==1){
            arr[i][j] = "N"; 
        }
     if(i == 0 && j == 2 || i== 7 && j==5 || i == 0 && j == 5 || i== 7 && j==2){
            arr[i][j] = "B"; 
        } 
     if(i == 0 && j == 3 ||  i== 7 && j==3){
            arr[i][j] = "Q"; 
        }    
     if(i == 0 && j == 4 ||  i== 7 && j==4){
            arr[i][j] = "K"; 
        }                   

    }
}
console.log(letters.join(' - '));
 printGame();