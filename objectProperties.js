// Setup
var testObj = {
    11: "Sandy",
    14: "Hannah",
    18: "John"
  };
  
  // solution using broacket notation 
  
  var playerNumber = 14;      
  var player = testObj[playerNumber];   
  
  console.log(player);

//   next
// Modify property by using dot or bracket notation 

// Setup
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // solution 

  myDog.name = "Happy Coder";
//   or 
 myDog['name'] = "Happy Dog";
  
  console.log(myDog['name']);


//   Next 
// Deleting Property from Object

  delete myDog.tails;
  
  