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


