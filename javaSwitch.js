// switch statements wih default
function switchWithBreaks (val) {
    var answer = ""; 

switch (val) {
    case "a":
      return "apple" ;
      break;
    case "b":
      return "bird";
      break; 
    case "c":
      return "cat";
     break; 

    default:
     return "anything";
    break; 
}
}

switchWithBreaks("a");
console.log(switchWithBreaks("a"));

// next

function switchWithoutBreak(val) {
    var answer = "";

    switch(val) {
        case 1:
        case 2:
        case 3:
            return "All";
            break;
        case 4:
            return  "only once"
    }
}

switchWithoutBreak(1);
console.log(switchWithoutBreak(1));
