var string = "Hello"
console.log(string.toLowerCase())

 var mathFloor = ("Hello")

 console.log(Math.floor(7.5));

console.log(Math.floor(2.3))

console.log(Math.floor(5.9))

var string = "Hello"
console.log(string.slice(0,2))
var string = "Hello World"  
console.log(string.slice(0,5))

function toUpper(str) {
    return str
         .split(' ')
        .map(function(word) {
            
         return word[0].toUpperCase() + word.substr(1);
          })
        .join(" ");
     }
     console.log(toUpper("hey friends ! practice practice practice!"))

     var arrayOfFruit = ["banana","apple", "orange","watermelon"]
     console.log("apple","orange","watermelon")
     arrayOfFruit.push(2)
     console.log(arrayOfFruit)

     
     var arrayOfVegetables = ["carrot","tomato","pepper","lettuce"]
     console.log("carrot","tomato","pepper")
     arrayOfVegetables.push(4)
     console.log(arrayOfVegetables)
     
     var orangeIndex = arrayOfFruit.indexOf("orange")
     console.log(orangeIndex)
    


    //  var newArray = arrayOfFruit.slice("")
    //   console.log(newArray)

      var arrayOfVegetables = ["carrot","tomato","pepper","lettuce"]
      var arrayOfVegetablesLength =arrayOfVegetables.length;
      console.log(arrayOfVegetablesLength)
      
      var newArrayOfFoods = arrayOfFruit.concat(arrayOfVegetables)
      console.log(newArrayOfFoods)
      newArrayOfFoods.splice(4,5,"pepper","lettuce")
      console.log(newArrayOfFoods)
      
      var newArrayOfFoods = ["carrot","tomato","pepper","lettuce","banana","apple", "orange","watermelon"]
      newArrayOfFoods.reverse()
      
      console.log(newArrayOfFoods)
      newArrayOfFoods = newArrayOfFoods.toString();
      console.log(newArrayOfFoods)

      
      
      


    

      
      
      

      
       


      
    