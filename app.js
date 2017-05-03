// Outer function with function parameter.
function outerFunc(innerFunc){
  innerFunc(); // Calling parameter function.
}

// Declar and define inner function.
var innerFunc = function() {
  console.log("Hello world from inner function"); // Printing text to console.
}

outerFunc(innerFunc); // Calling outer function with inner function as parameter.
 
 