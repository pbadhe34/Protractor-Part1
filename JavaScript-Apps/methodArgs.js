function varArgs()
 {
	 
 }
 
 varArgs.Sum=function()
 {
	   var len = varArgs.Sum.arguments.length
		var ans = 0
		for (i=0; i<len; i++)	
		{
			ans += varArgs.Sum.arguments[i]	
		}
		console.log("<br>");
		console.log("\nThe Sum for var args container function Is " + ans)
 }
 
 var twoArgs = { }
 
 twoArgs.Sum= function(num1, num2)
 {
	     var ans = num1 + num2
		console.log("<br>");
		console.log ("The Sum with two args conatiner function Is " + ans)
 }
 
var name = 123
name = true
  

var num2 = Sum;
  
function Sum(num1,num2)
{
 var ans = num1 + num2
 console.log("<br>");
 console.log ("The Sum with two args function Is " + ans)
} 

function Sum ()
{     
	var len = Sum.arguments.length
	var ans = 0
	for (i=0; i<len; i++)	
	{
		ans += Sum.arguments[i]	
	}
	console.log("<br>");
	console.log("\nThe Sum for variable args Is " + ans)
}




   
   twoArgs.Sum (1,2);
   varArgs.Sum (10,3,30) 
   varArgs.Sum ("Hello",8,1,true) 
   twoArgs.Sum() 
    

    /*
   Sum(11,34,45,"heell")
   Sum(3,5,1,9,true,56,false)
   Sum(0)
 */






   
 