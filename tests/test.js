'use strict'

var jasmine = require('jasmine');
require('../app/index.js')

(function(){
  'use strict';
  describe("Animal: Create an animal and make it say name", function() {

    it("The animal should be a type of `object`, and an instance of the `Animal` class", function() {
      var penguin = new Animal('Captain Cook', 2);
      expect(typeof penguin).toEqual(typeof {});
      expect(penguin instanceof Animal).toBeTruthy();
    });

    it("The animal should be called 'Null' if no name is passed as a parameter", function() {
      var noAnimal = new Animal();
      expect(noAnimal.name).toEqual('Null');
      expect(noAnimal.numOfLegs).toBe('GM');
    });

    it("The animal name and number of legs should be a property of the animal", function() {
      var cat  = new Animal('Cheshire Cat', 3);
      expect(cat.name).toBe('Cheshire Cat');
      expect(cat.model).toBe(3);
    });

    it("The animal shoud be able to speak (bark)", function() {
      var dog  = new Animal('Golden Retriever', 4);
      expect(dog.speak).toBe('woof');

      var cat = new Animal('Cheshire Cat', 3);
      expect(cat.speak).toBe('meow');

      var parrot = new Animal('Sandy', 2);
      expect(parrot.speak).toBe('mimic');
    });

    it("The animal should be able to mimic you", function() {
      var penguin  = new Animal('Sandy', 2);
      expect(parrot.sayName).toBe("Hi my name is Sandy.")
    });
  });
})();