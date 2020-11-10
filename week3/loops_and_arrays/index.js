var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name:"Mike",
        age: 12,
        gender: "male"
    },{
        name:"Madeline",
        age: 80,
        gender: "female"
    },{
        name:"Cheryl",
        age:22,
        gender: "female"
    },{
        name:"Sam",
        age: 30,
        gender: "male"
    },{
        name:"Suzy",
        age: 4,
        gender: "female"
    }
  ]
  
  for( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ) {
    if( peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        var xGender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ? "HE'S" : "SHE'S"
        
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. " + xGender + " good to see Mad Max Fury Road.")
    } else {
       var xGender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ? "HIM" : "HER"
       
       console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let "+ xGender + " in.")
    }
  }
  
  
  // create a for loop that iterates through 101 numbers (from 0 - 100. if the current iteration is an odd number, print odd to the console otherwise print even
  for (var x = 0; x <= 100; x++) {
    if( x % 2 === 0) {
        console.log(x + " Even")
    } else {
        console.log(x + " Odd")
    }
  }
  
  
  // Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number.
  var onLIght = false;
  
  var onTab = [ 2, 1 ];
  
  for( var x = 0; x < onTab.length; x++ ) { 
    for( var j = 0; j < onTab[x]; j++ ) {
        onLIght = !onLIght;
    }
  }
  
  if( onLIght ) {
    console.log("The light are on");
  } else {
    console.log("The light are off");
  }
  
  