

console.log(capitalizeAndLowercase("Hello"));
function capitalizeAndLowercase(str){
    return str.toUpperCase()  + str.toLowerCase();
}
console.log(findMiddleIndex("Hello"));
console.log(findMiddleIndex("Hello World"));

function findMiddleIndex(Str) {
    return Math.floor(Str.length/2);
}

console.log(returnFirstHalf("Hello"));
console.log(returnFirstHalf("Hello World"));

function returnFirstHalf(Str) {
    return Str.substr(0,Math.floor(Str.length/2));
}

console.log(capitalizeAndLowercase2("Hello"));
console.log(capitalizeAndLowercase2("Hello World"));

function capitalizeAndLowercase2(Str) {
    return Str.substr(0,Math.floor(Str.length/2)).toUpperCase()+Str.substr(Math.floor(Str.length/2));
}

console.log(capitalize("hey friends! practice practice practice"));
function capitalize(str){
    let strArr = str.split(" ");
    let result = "";
    for(let i=0; i<strArr.length;i++){
        let word = strArr[i];
        result = result + word.substr(0,1).toUpperCase()+ word.substr(1)+" ";
    }
    return result;
}

var fruits = ["banana", "apple","orange", "watermelon"];
var vegetables  =["carrot","tomato","pepper","lettuce"];
printArrays();
vegetables.splice(vegetables.length -1, 1);
printArrays();
fruits.splice(0,1);
printArrays();
let orangeIndex  = fruits.indexOf("orange");
fruits.push(orangeIndex);
printArrays();
let vegLen = vegetables.length;
vegetables.push(vegLen);
printArrays();
let food = fruits.concat(vegetables);
console.log("food : ", food);
food.splice(4,2);
console.log("food : ", food);
food.reverse();
console.log("food : ", food);
console.log(food.toString());
function printArrays(){
console.log("fruit: ", fruits)
console.log("vegetables: ", vegetables)
}

