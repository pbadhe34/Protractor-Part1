
function Data() 
{
Data.prototype.Count = 4;

Data.prototype.curbWeightInPounds = 4000;
 }
/*
 * Common properties and functions for object instances of this type are shared  in Prototype instance
 * In this case it is the instace created from vehicle function object
 * Consequenetly adding the same Prototype properties in child components,it will be common to all  instances 
 * of child type and so.
 * The interpreter checks for the properties in current instance->the protype of that instance->The next base type in chain
 */
//Inheritance in OBJECTS
/* Constructor function for the Vehicle object */
function Vehicle(num2) { 

/* Standard properties of a Vehicle */
  Vehicle.prototype.wheelCount = num2;
  Vehicle.prototype.curbWeightInPounds = 4000;
  this.num = 101;
  this.getWork=function(){
	  alert('vehicle proto work')
  }

/* Define a prototype function for refueling a Vehicle */
 Vehicle.prototype.refuel = function()
 {
    return "Refueling Vehicle with regular Fuel";
 }

/* Define a prototype function for performing the main tasks of a Vehicle */
Vehicle.prototype.mainTasks = function()
{
    return "Driving to work, school, and the grocery store";
}
}

/* Constructor function for the SportsCar object */
function SportsCar() { }

/* Define SportsCar extends Vehicle by Prototype*/
SportsCar.prototype = new Vehicle(8);
//SportsCar.prototype = new Data();


/* SportsCar overrides the curbWeightInPounds propery and 
   is lighter than Vehicle 
  */
//SportsCar.prototype.curbWeightInPounds = 3000;

/* Define a prototype function for SportsCar refuel : which requires premium grade fuel */

/*
SportsCar.prototype.refuel = function() 
{
    return "Refueling SportsCar with premium 94 Fuel";
}
*/

/* Define a prototype function for performing the main tasks of a SportsCar */
SportsCar.prototype.mainTasks = function()
{
    return "Spirited driving, looking good, driving to the beach";
}


/* Constructor function for the CementTruck object */
function CementTruck() { }

/* Define CementTruck extends Vehicle by using prototype method */
CementTruck.prototype = new Vehicle();

/* CementTruck overrides the properties
 and has 10 wheels and weighs 12,000 pounds
 */
CementTruck.prototype.wheelCount = 10;
CementTruck.prototype.curbWeightInPounds = 12000;

/* Define a prototype function for CementTruck refuels with diesel fuel */
CementTruck.prototype.refuel = function()
{
    return "Refueling CementTruck with diesel fuel";
}

/* Define a prototype function  for performing 
the main tasks of a CementTruck */

CementTruck.prototype.mainTasks = function() {
    return "Arrive at construction site, extend boom, deliver cement";
}


function describe(vehicle) 
{
    var description = "";
    description = description + "Number of wheels: " + vehicle.wheelCount;
    description = description + "\n\nCurb Weight: " + vehicle.curbWeightInPounds;
    description = description + "\n\nRefueling Method: " + vehicle.refuel();
    description = description + "\n\nMain Tasks: " + vehicle.mainTasks();
    console.log(description);
}

function createVehicle()
{
    console.log("Test Vehicle\n")
    var vehicle = new Vehicle(14);
    describe(vehicle);
    console.log("\n")
}

function createSportsCar()
{
    console.log("Test SportsCar\n")

    var sportsCar = new SportsCar();
	//sportsCar.wheelCount = 6
    describe(sportsCar);
	var sportsCar2 = new SportsCar();
	describe(sportsCar2);
    console.log("\n")

}

function createCementTruck()
{
     console.log("Test CementTruck\n")

    var cementTruck = new CementTruck();
    describe(cementTruck);
}

createVehicle();
createSportsCar();
createCementTruck();


