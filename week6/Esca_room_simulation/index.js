const readline = require("readline-sync");
let keyFound = false;

while(true){
console.log ("Your options are ");
console.log("1. Put hand in hole");
console.log("2. Find the key or");
console.log("3. Open the door");
const option = readline.question("Please choose your options from above ");
console.log("You have choosen : "+option) ;
 if(option == 1) {
     console.log("You died!!!!");
     break;
 }else if(option == 2) {
    console.log("You got the key !!!!");
    keyFound  = true;
}
else if(option == 3) {
    if(keyFound){
        console.log("Your door got opened");
    }else {
        console.log("Sorry but you need the key to topen the door!!");
    }
}else {
    console.log("You have choosen a wrong option. Try again.");
}
}