let name = "John"
const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = {type: pets[i]}
        name;
        if(pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }

    console.log("pet name: ", name)
    pets.name = name
    petObjects.push(pets)
    }
console.log("man name: ", name)
return petObjects
}

runForLoop(["cat","dog"]);



const carrots = ["bright orange", "ripe", "rotten"]
function mapVegetables(arr) {
    return arr.map(x => x.food) 
        return {type: "carrot", name: carrot}
}



const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
    name: "Mario",
    friendly: true
    },
    {
    name: "Bowser",
    friendly: false
    }
]

function filterForFriendly(arr){
    return arr.filter(m => m.person)
}
filterForFriendly(people);



let doMathSum = (a, b) => a + b;

var produceProduct = (a,b) => a * b

function printString(firstName, lastName, age){
  console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}`);
}

printString("Jane","Doe",40);


const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "pigletter"
    },
    {
        type: "dog",
        name: "sparky"
    }
]

let filterForDogs = animals.filter(m => m.type === "dog")
console.log(filterForDogs);

function exhibit(location, name) {
    console.log(`Hi ${name}! Welcome to ${location}. I hope you enjoy your stay. Please ask the president anything` )
}

exhibit("Hawaii", "Janice")