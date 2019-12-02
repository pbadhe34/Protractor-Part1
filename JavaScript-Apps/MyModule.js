
 var localData =100

 MyApp = "This is app title"
  
 function test()
 {
   console.log("This is test defind in "+module.filename)

   console.log("This module is loaded in"+module.parent.filename)

  console.log("\n");

   if(require.main === module)
     console.log("The MyModule  Module is current module");

   else
   console.log("The MyModule  Module is NOT current module");

  }
console.log("\n");


 
/*
To add functions and objects to the root of the module, you can add them to the special exports object.
  */

exports.data = MyApp 


exports.update = test








