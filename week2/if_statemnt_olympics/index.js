let number = 5;

if(number > 3) {
    console.log("is greater than");
}

let animal = "cat";

if(animal.length === 3) {
    console.log("is the length")
}

if(animal === "dog") {
    console.log("The same");
}
else {
  console.log("not the same");
}

var person = {
    name: "Bobby",
    age: 12
}

if (person.age >= 18) {
    console.log("Bobby can go to the  movie");
}
else {
    console.log("Bobby is still under age")
}

if (person.name[0] === "B") {
    console.log("Bobby can go to the  movie");
} 

if (person.name[0] === "B" && person.age >= 18 ) {
    console.log("Bobby can go to the  movie");
} 

else {
    console.log("Bobby is still under age");
}



let num  = 1;

if(num === "1") {
    console.log("strict");
} else if(1 == "1") {
    console.log("Abstract/Loose");
} else {
    console.log("not equal at all");
}

let value = 1;

if(value <= 2 && 2 === 4) {
    console.log("Yes");
} else {
    console.log("no")
}


console.log(typeof "dog")
console.log(typeof true)

if (typeof variable === "undefined") {
    console.log("Variable is undefined")
}

if("s" > 12) {
    console.log("Yes")
} else {
    console.log("No")
}

let digit = 8;

if(digit % 2 === 0) {
    console.log("Even Number")
} else {
    console.log("Odd Number")
}

let result = (digit % 2 == 0) ? "Even Number" : "Odd Number";
console.log(result)









