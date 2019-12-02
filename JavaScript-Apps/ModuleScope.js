  
 var moduleApp = require("./MyModule");

 var moduleSquare = require("./SquareModule");

if(require.main === module)
  console.log("The main Module is current module");


console.log('The current Module is '+module.filename);

  
   
 console.log('The MyModule data is '+moduleApp.data);

 moduleApp.update()

var TestSquare = moduleSquare(21);
console.log(`The area of my square is ${TestSquare.area()}`);
