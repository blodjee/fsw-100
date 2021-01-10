const readLine   = require ("readline-sync");
console.log("Welcome to RPG game");
console.log("Hello  ! Thanks  for  being a no work guy. Lets play the game");
const name = readLine.question("What is your name: ");
let score = 200;
while(true){
    
const walk  =readLine.question("Please enter 'w' to walk: ");
var enimes = ["Monster", "Alien", "Yoda"];
var randomEnmy = enimes[Math.floor(Math.random()*enimes.length)];
console.log("You have encountered a " + randomEnmy);
console.log("You want to attack or run ? ");
const attRun   = readLine.question("Press a for attack and r to run: ");

var damageAmounts = [50, 100,150];
var damage = damageAmounts[Math.floor(Math.random()*damageAmounts.length)];
if(attRun =='a'){
    var escapes = [true,false];
    var esc = escapes[Math.floor(Math.random()*escapes.length)];
    if(esc) {
        console.log("Nice. You attacked "+randomEnmy+" successfuly ");
        if(randomEnmy == "Monster") {
            console.log("You have earned 50 points");
            score += 50;
        }
        if(randomEnmy == "Alien") {
            console.log("You have earned 100 points");
            score += 100;
        }
        if(randomEnmy == "Yoda") {
            console.log("You have earned 150 points");
            score += 150;
        }
        var inventory = ["Sword","Bomb", "Gun", "Arrow"];
        var env = inventory[Math.floor(Math.random()*inventory.length)];
        console.log(name+", your score now is "+ score);
        console.log("Congrats. You got a "+ env + " for you attack");
    }else {
        console.log("Sorry "+name+", your attack is not successful. You lost 50 points");
        score -= 50;
        if(score <= 0 ){
            console.log("Sorry "+name+", your power is gone. You are dead now.");

            break;
        }
    }
  
}else {
    var escapes = [true,false];
    var esc = escapes[Math.floor(Math.random()*escapes.length)];
    if(esc) {
        console.log("Nice. You ran away from " + randomEnmy);
    }else {
        console.log("Sorry "+name+", but you should be a bit faster. "+ randomEnmy + " killed you.");
        console.log(name+", your final score :  "+ score);
        break;
    }
}
}