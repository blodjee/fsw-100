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

var voters = [
    {name: "Bob", age: 30, voted: true},
    {name: "Jake", age:32, voted: true},
    {name: "kate", age: 25, voted: false},
    {name: "Sam", age: 20, voted: false},
    {name: "Phil", age: 21, voted: true},
    {name: "Ed", age: 55, voted: true},
    {name: "Tami", age: 54, voted: true},
    {name: "Mary", age: 31, voted: false},
    {name: "Becky", age: 43, voted: false},
    {name: "Joey", age: 41, voted: true},
    {name: "Jeff", age: 30, voted: true},
    {name: "Zack", age: 19, voted: false}
];

function totalVoters(arr) {
    return arr.filter(x => x.voted==true).length;
}
console.log(totalVoters(voters));


var wishList = [
    {title: "Tesla Model S", price: 90000},
    {title: "4 carat diamond ring", price: 45000},
    {title: "Fancy hacky Sack", price: 5},
    {title: "Gold fidgit spinnner", price: 2000},
    {title: "A second Tesla Model S", price: 90000}
];

function shoppingSpree(arr) {
    return wishList.map(x => x.price).reduce((a,b)=>a+b);
}
console.log(shoppingSpree(wishList));


var arrays = [
    ["1", "2", "3"],
    [true],
    [4,5,6]
];

var merArray = arrays.reduce(function(a,b) {
    return a.concat(b);
}, []);

console.log(merArray);


var least = [1,3,5,2,90,20];
least.sort((a, b)=> a - b);
console.log(least);

var high = [1,3,5,2,90,20];
high.sort((a, b)=> b - a);
console.log(high);

function lengthSort(arr) {
    return arr.sort((a, b) => {
        return a.length-b.length;
    })
}
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));


function alphabetical(arr) {
    return arr.sort((a, b) => {
        for (var i=0;; i++) {
            if(!a.charCodeAt(i).isNaN) {
                if(!b.charCodeAt(i).isNaN) {
                    if(a.charCodeAt(i)-b.charCodeAt(i) == 0)
                    continue;
                    return a.charCodeAt(i)-b.charCodeAt(i);
                }
                else break;
            }
            else break;
        }
    });
}
console.log(alphabetical(["dog","wolf", "by", "family", "eaten"]));