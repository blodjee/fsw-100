const readline = require("readline-sync");
while(true){
  var n1 = readline.question("Please enter first number : ");
  var n2 = readline.question("Please enter second number : ");
  console.log("Please choose the operation below");
  console.log("1.Add");

  console.log("2.Sub");
  console.log("3.Mul");
  console.log("4.Div");
  var option = readline.question("Please enter the operation number : "); 
   switch(parseInt(option)){
       case 1:
           console.log(add(n1,n2));
           break;
           case 2:
            console.log(sub(n1,n2));
            break;
            case 3:
            console.log(mul(n1,n2));
            break;
            case 4:
                console.log(div(n1,n2));
                break;
                
   }
}

function add(n1,n2) {
    return parseInt(n1)+parseInt(n2);
}
function sub(n1,n2) {
    return n1-n2;
}
function mul(n1,n2) {
    return n1*n2;
}
function div(n1,n2) {
    return n1/n2;
}