'use strict'

var jasmine = require('jasmine');
var myApp = require('../app/index.js')

describe("Animal: Create an animal and make it say name", function() {

  it("The animal should be a type of `object`, and an instance of the `Animal` class", function() {
    var penguin = new Animal('Captain Cook', 2);
    expect(myApp.Animal(typeof penguin)).toEqual(typeof {});
    expect(myApp.Animal(penguin instanceof Animal)).toBeTruthy();
  });

  it("The animal should be called 'Null' if no name is passed as a parameter", function() {
    var noAnimal = new Animal();
    expect(myApp.Animal(noAnimal.name)).toEqual('Null');
    expect(myApp.Animal(noAnimal.numOfLegs)).toBe('0');
  });

  it("The animal name and number of legs should be a property of the animal", function() {
    var cat  = new Animal('Cheshire Cat', 3);
    expect(myApp.Animal(cat.name)).toBe('Cheshire Cat');
    expect(myApp.Animal(cat.model)).toBe(3);
  });

  it("The animal shoud be able to speak (bark)", function() {
    var dog  = new Animal('Golden Retriever', 4);
    expect(myApp.Animal(dog.speak)).toBe('woof');

    var cat = new Animal('Cheshire Cat', 3);
    expect(myApp.Animal(cat.speak)).toBe('meow');

    var parrot = new Animal('Sandy', 2);
    expect(myApp.Animal(parrot.speak)).toBe('mimic');
  });

  it("The animal should be able to mimic you", function() {
    var penguin  = new Animal('Sandy', 2);
    expect(myApp.Animal(parrot.sayName)).toBe("Hi my name is Sandy.")
  });
});