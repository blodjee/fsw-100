function add (a,b){
    return a+b
}
let sum = add (5,7)
console.log("sum",sum);

function get_max (num1,num2,num3){
    var max = Math.max (num1,num2,num3);
    return max  
}
console.log(get_max(4,7,9));

var isEven = (num) => {
    if (num == 0) return "Number is even";
    else if (num == 1) return "Number is odd";
    else return isEven(num - 2);
  }
console.log(isEven(11))

function firstHalf (str){
    if (str.length % 2 == 0){
     return str.slice( str.length/2)
    }
}

console.log(firstHalf("university for life in the world"))


function fibonacci(num) {
    return Array.apply(null, Array(num)).reduce(function(acc, curr, idx) {
      return idx > 2 ? acc.concat(acc[idx-1] + acc[idx-2]) : acc;
    }, [ 1, 1,2]);
  }
  
  console.log(fibonacci(6));

