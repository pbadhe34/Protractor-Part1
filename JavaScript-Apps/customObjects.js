 function person(fname,lname,age1,color)
{
     var SirName="Joshi" 
     person.prototype.income = 1000;

     var data = 333
	person.data="My Numerics";//person property
	this.firstname=fname
	this.lastname=lname
	this.age=age1
	person.age = 23
	this.eyecolor=color
	this.earnMoney=Work //assign predefined funcion reference
    this.getSalary=function()//anonymous function
      {
           return 100.56;
       } 
    this.getSirname=function()
      {
          return SirName;//closure
      } 
	 this.spendMoney=function(income)
	  {
	  	console.log("The person instance spending money  "+income);
	  }
   person.enjoyWork=function()
	  {
	  	console.log("Person is enjoying with "+person.data);
	  }
	}

function Work(hours)
{
   console.log(this.firstname  +"  is  Working for    "+ hours)
   
}
 
function checkObjects()
{
  var obj1 = {};
  obj1.name="Asoka";
	
  emp1=new person("Asoka","Mourya",27,"blue")
  emp2=new person("Ragini","Vaiya",26,"black")
  emp1.earnMoney(10)
  //emp1.work(); 
  
  console.log("Emp sirname is  "+ emp1.getSirname());
  console.log("Emp1 data  "+ emp1.data);
  //console.log("Emp2 data  "+ emp2.data());

    x = emp1.data

    console.log("trying")

    //emp1.test();
  
   console.log.grade = "New Position";//for this instance only
   console.log("Emp1 grade is  "+ emp1.grade);
   console.log("Emp2 grade is  "+ emp2.grade);
  
  person.data= 12;
  
  console.log( "Person data "+person.data);
  person.enjoyWork();
  
  //emp1.enjoyWork();
  
  emp2.earnMoney(4)   
}

checkObjects();

