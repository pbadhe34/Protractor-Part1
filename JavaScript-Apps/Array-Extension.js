function myDisplay() 
{ if (this.length != 0) 
    console.log(this.toString()); 
 else console.log("This array is empty"); 
}  
function printArray()
{
var myArray = [4,5,7,32];
var myArray2 = []; //empty array

Array.prototype.display = myDisplay;
//Array.display = myDisplay;
//myArray.display = myDisplay

 myArray.display(); // displays the array values 
 myArray2.display(); 

}

function printRegular()
{
  
 var myArray = [4,5,7,32];
  console.log(myArray .toString()); 
 var myArray2 = []; 
  console.log(myArray2 .toString()); 

}

printArray();
printRegular();

