
// variable name is equal to Keith.
// We call the function printName and have not passed any parameters in the brackets.
// The return value will be the function printName then the argument
// "My name is" then append which ever name, in this case Keith.
// Im not very sure if the function is being declared or invoked.
var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

// i think this is using a global variable 5 and the local variable 3 will
// take priority.
//
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// Display array list of Chickens, Cats, Rabbits then Ducks, Dogs, lions.
// Function name myAnimals has an array list of chickens, Cats and Rabbits.
// Then var i=0; i<myanimals.length; i++ allows us to pass a variable number of parameters.
// I thought that this for loop will loop over the array list and append the new animals to the list
// but actually ducks, dogs and Lions replace the array items.

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// tbc
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );


// create an object named detective with values Ace ventura and monkey but has no methods.
// then the second function has no second line ( but i have forgotten what this is called)
// Poirot will be displayed.
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

// the murderer is Rick is displayed because this is a global variable.
// This is one of the things to watch with javascript(i think).
var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

// my own

// var myHouse = ['Chairs', 'TV', 'Kettle'];
//
// var listHouse = function() {
//   myHouse = ['Bed', 'Shower', 'Lamp', 'Washing', 'Ironing'];
//   for(var i=0;i>myHouse.length; i++){
//     console.log(i + ": " + myHouse[i]);
//   }
// }
// listHouse();

// or
var houses = ["chairs","tv","kettle"];

for (var house of houses) {
  console.log(house);
}
