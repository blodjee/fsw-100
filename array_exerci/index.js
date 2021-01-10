function fiveAndGreaterOnly(arr) {
   return arr.filter(num =>  num >= 5 );
};

console.log(fiveAndGreaterOnly([3,6,8,2]));

function evensOnly(arr) {
    return arr.filter(num =>  num % 2 == 0 );
}

console.log(evensOnly([3,6,8,2]));

function ofAge(arr) {
    return arr.filter(obj =>  obj.age> 17 );
}

console.log(ofAge([
    {name : "Angelina Joie", age: 80},
    {name : "Eric jones", age: 2},
    {name : "Paris Hilton", age: 5},
    {name : "Kanye West", age: 16},
    {name : "Bob Zyroll", age: 100}
]))


function doubleNumbers(arr) {
    return arr.map(num => num*2);
}

console.log(doubleNumbers([2,5,100]));

function stringItUp(arr) {
    return arr.map(num => ""+num);
}

console.log(stringItUp([2,5,100]));

function capitalizeNames(arr) {
    return arr.map(name =>  {
         let newName   =name.toLowerCase();
         return newName.charAt(0).toUpperCase() + newName.slice(1);
    });
}

console.log(capitalizeNames(["john", "JACOB","JinGleHeimer","schmidt"]));


function namesOnly(arr) {
    return arr.map(obj =>  obj.name );
}

console.log(namesOnly([
    {name : "Angelina Joie", age: 80},
    {name : "Eric jones", age: 2},
    {name : "Paris Hilton", age: 5},
    {name : "Kanye West", age: 16},
    {name : "Bob Zyroll", age: 100}
]))

function makeStrings(arr) {
    return arr.map(obj =>  {
        if(obj.age > 17) {
            return obj.name + " can go the Matrix"
        }else {
            return obj.name + " is under age !!";
        }
    } );
}

console.log(makeStrings([
    {name : "Angelina Joie", age: 80},
    {name : "Eric jones", age: 2},
    {name : "Paris Hilton", age: 5},
    {name : "Kanye West", age: 16},
    {name : "Bob Zyroll", age: 100}
]))

function total(arr) {
    return arr.reduce((total,current) => total+current);
}

console.log (total([1,2,3]));


function stringConcat(arr) {
    return arr.reduce((total,current) => ""+total+current);
}

console.log (stringConcat([1,2,3]));

function totalVotes(arr){
  return arr.filter(obj => obj.voted).length;
}
var voters =[
    {name: 'Bob', age:30, voted:true},
    {name: 'Jake', age:32, voted:true},
    {name: 'kate', age:25, voted:false},
    {name: 'Sam', age:20, voted:false},
    {name: 'Phil', age:21, voted:true},
    {name: 'Ed', age:55, voted:true},
     {name: 'Tamil', age:54, voted:true},
     {name: 'Mary', age:31, voted:false},
     {name: 'becky', age:43, voted:false},
     {name: 'Joey', age:41, voted:true},
     {name: 'Jeff', age:30, voted:true},
     {name: 'Zack', age:19, voted:false}
     
]
console.log(totalVotes(voters));

function shoppingSpree(arr){
    return arr.reduce(function (acc, obj){
      
        return   acc  + obj.price;
    },0);
  }
  var wishlist =[
      {title: 'Tesla Model S', price:90000},
      {title: '4 carat diamond ring', price:45000},
      {title: 'Fancy Hacky sack', price:5},
      {title: 'Gold fidgit spinner', price:2000},
      {title: 'A second Tesla Model S', price:90000}
       
  ]
  console.log(shoppingSpree(wishlist));

  function flatten(arr) {
    return arr.reduce((total,current) => total.concat(current));
  }

  var arrays = [
["1","2","3"], 
[true],
 [4,5,6]
  ]

  console.log(flatten(arrays));

  function leastToGreatest(arr) {
  return arr.sort( function (a,b) {
       return a -b;
  });
  }

  console.log(leastToGreatest([1,3,5,2,90,20]));

  function GreatestToLeast(arr) {
    return arr.sort( function (a,b) {
         return b -a;
    });
    }
  
    console.log(GreatestToLeast([1,3,5,2,90,20]));

    function lengthSort(arr) {
        return arr.sort( function (a,b) {
             return a.length -b.length;
        });
        }
      
        console.log(lengthSort(["Dog","WQolf","By","Family","Eaten"]));