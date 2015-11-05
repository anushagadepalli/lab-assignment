// A constructor for defining new cars
function StudentDatabase(options) {
  // some defaults
  this.idnumber = options.idnumber || localStorage.getItem("username");
  this.name = options.name || localStorage.getItem("fname");
  this.email = options.email || localStorage.getItem("email");
}

// A constructor for defining new trucks
/*function Truck(options) {
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}*/
 
// Define a skeleton vehicle factory
function DatabaseFactory() {}
// Define the prototypes and utilities for this factory
 
// Our default vehicleClass is Car
DatabaseFactory.prototype.studentClass = StudentDatabase;
 
// Our Factory method for creating new Vehicle instances
VehicleFactory.prototype.createStudent = function ( options ) {
 
  return new this.studentClass( options );
};
 
// Create an instance of our factory that makes cars
/*var carFactory = new VehicleFactory();
var car = carFactory.createVehicle( {
            vehicleType: "car",
            color: "yellow",
            doors: 6 } );
 
// Test to confirm our car was created using the vehicleClass/prototype Car

// Outputs: true
console.log(car instanceof Car);
 
// Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
console.log(car);*/