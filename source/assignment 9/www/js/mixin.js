// Extend an existing object with a method from another
function augment( receivingClass, givingClass ) {
    // only provide certain methods
    if ( arguments[2] ) {
        for ( var i = 2, len = arguments.length; i < len; i++ ) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    // provide all methods
    else {
        for ( var methodName in givingClass.prototype ) {
            // check to make sure the receiving class doesn't
            // have a method of the same name as the one currently
            // being processed
            if ( !Object.hasOwnProperty.call(receivingClass.prototype, methodName) ) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
            
            // Alternatively (check prototype chain as well):
            // if ( !receivingClass.prototype[methodName] ) {
            //      receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            // }
        }
    }
}
 
var Mixin  = function() {}
Mixin.prototype = {
  login: function(){
    console.log( "user logging in" );
  },
  delete: function(){
    console.log( "deleting a user account" );
  },
  register: function(){
    console.log( "user can register now" );
  }
};

// A skeleton carAnimator constructor
function Student() {
  this.login = function(){
    console.log( "student logs in" );
  };
}
 
// A skeleton personAnimator constructor
function Admin(){
  this.delete = function(){
    console.log("admin can delete student account");
    this.register = function(){
    console.log("admin can register a student");    
  };
}

augment(Student, Mixin);
augment(Admin, Mixin);

/*
// Create a new instance of carAnimator
var myAnimator = new CarAnimator();
myAnimator.moveLeft();
myAnimator.moveDown();
myAnimator.stop();
*/

/*var pAnimation = new PersonAnimator();
pAnimation.moveDown();
pAnimation.moveRandomly();*/