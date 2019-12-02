 var name = "Vijay" //global
  
 message = "Welcome!";//implicitly global

 global.myData = "HHs s";
  

 function accessTest()
 {
   console.log("The this is  "+this);

   console.log("The this object inside the function  "+this)

   var user = "Test";
   var name = "Sunil";  //declare local override global
   data = "The current user data..";//what is the scope ?
    
   console.log("The local name is  "+name)
   console.log("The global data is "+global.myData);
   console.log("The local module is  "+module)

 }

function varTest()
 {   
   console.log("The message is "+message);
   console.log("The name inside varTest is  "+name)

   console.log("The global object is  "+global.constructor.name)
    
   console.log("The global data is "+global.myData);
   console.log("The message is "+this.message);
   console.log("The data inside test is "+myData);
console.log("The data now inside test is "+data);

 }

//accessTest();

varTest();

console.log("The data out side test is "+this.myData);


console.log("The current dir is  "+__dirname);

console.log("The current running file is  "+__filename);

console.log("The name here is  "+name)

console.log("The global object out side the function  "+this)

console.log("\nTHIS:");
console.log(this);
//console.log("\nGLOBAL:");
//console.log(global);
//global and GLOBAL are one and the same thing.
// Indeed, GLOBAL is an alias for global.


 
