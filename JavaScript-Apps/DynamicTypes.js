   
//console.log(getGlobalObject());

var name = "Sunil"; 
   
  //Refer to local variable  name  
    console.log("The local name is  "+name);    
    

  // var name = "John_Decunha";
   console.log("Now the type of Name is "+typeof(name))
   
   name = 786;
   console.log("Now the type of Name is "+typeof(name))

   name=true;
   console.log("Now the type of Name is "+typeof(name))


   name = global;
   console.log("Now the type of Name is "+typeof(name))

   console.log("I am global");

   name = accessTest;

   console.log("Now the type of Name is "+typeof(name))

    
   name();

   name = undefined;
   console.log("Now the type of Name is "+typeof(name))



   name= null
   console.log("Now the type of Name is "+typeof(name))

   console.log("Now the type of global is "+getGlobalObject())



function accessTest()
 {
   console.log("The this is  "+this);

   console.log("The this object inside the function  "+this)

   var user = "Test";
   var name = "Sunil";  //declare local override global
   data = "The current user data..";//what is the scope ?
    
   console.log("The local name is  "+name)
   console.log("The global name is "+global.name);
   console.log("The local module is  "+module)

 }


function getGlobalObject()
{
 
   return this; 
}




 


