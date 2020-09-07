var readlineSync = require('readline-sync');


var name = readlineSync.question('What is your name? ');
console.log('Hi ' + name+ '!' + ' Welcome to the escape room game.');

function hole() {
    var ho = document.getElementById("dead");
    if (ho.style.display === "none") {
      ho.style.display = "block";
    } else {
      ho.style.display = "none";
    }
}

function door() {
    var di = document.getElementById("door");
    if (di.style.display === "none") {
      di.style.display = "block";
    } else {
      di.style.display = "none";
    }
}

function key() {
    var ke = document.getElementById("key");
    ke = prompt("Please enter KEY equivalent number");

    if (ke == 3) {
        document.write("Congratulations, you have won!!!!");
    } else {
        document.write("Not the correct key equivalent");
    }
}


