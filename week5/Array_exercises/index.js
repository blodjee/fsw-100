// let  arr = [3,6,8,2]

// let result = array.filter(function fiveAndGreaterOnly(num){
//     if (num % 2 === 0)


    

// })

// Console.log(result)

const fiveGreater = [3,6,8,2];

const filtFive = fiveGreater.filter(function(value) {
    return value >= 5;
})

console.log(filtFive);


var arr = [3,6,8,2];
var newArr = arr.filter(function(value) {
    return value % 2 === 0;
});

console.log(newArr);

const ofAge = [
    {name: "Aneglina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100}
]

const theMatrix = ofAge.filter(m => m.age >=17);
console.log(theMatrix);

var double = [2,5,100];
var finalDouble = double.map(function(value) {
    return value * 2;
})

console.log(finalDouble);

var number = [2,5,100];
var stringItUp = number.map(function(value) {
    return value + "";
})
console.log(stringItUp);

const capitalize = ["john", "jacob", "jingleHeimer", "schmidt"];
const capitalizeNames = capitalize.map(value => value.charAt(0).toUpperCase() + value.slice(1));
console.log(capitalizeNames);

const name = [
    {name: "Aneglina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100}
]

const namesOnly = name
.filter(m => m.name)
.map(m => m.name + "")

console.log(namesOnly);

const makeStr = [
    {name: "Aneglina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100}
]
const finalStr = makeStr
.filter(m => m.age < 17)
.map(m => m.name + " under age")

const finalStr2 = makeStr
.filter(m => m.age >= 17)
.map(m => m.name + " go to Matrix")

console.log(finalStr2,finalStr);


const total = [1,2,3];
const fTotal = total.reduce((accumulator , currentvalue) => {
    return accumulator + currentvalue;
}, 0)
console.log(fTotal);

const stringCon = [1,2,3];
const stringConcat = stringCon.reduce((total, val) => {
    return total.concat(val)
}, "");
console.log(stringConcat);


