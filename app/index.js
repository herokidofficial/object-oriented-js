'use strict'
module.exports = {
	Animal: function(name, numOfLegs) {
    	this.name = name || 'Null';
    	this.numOfLegs = numOfLegs || '0';
    	this.speak = function (param) {
    		return param;
    	};
    	Animal.prototype.sayName = function () {
    		return "Hi my name is " + this.name + ".";
    	};
    	var noAnimal = new Animal();
		return noAnimal.name;
		return noAnimal.numOfLegs;

		var cat = new Animal('Cheshire Cat', 3);
		return cat.name;
		return cat.numOfLegs;
		return cat.speak("meow");

		var dog = new Animal('Golden Retriever', 4);
		return dog.speak("woof!");

		var parrot = new Animal('Sandy', 2);
		return parrot.name;
		return parrot.numOfLegs;
		return parrot.speak("mimic");
		return parrot.sayName();

		var penguin = new Animal('Captain Cook', 2)
		return typeof penguin;
		return penguin instanceof Animal;
	}
}