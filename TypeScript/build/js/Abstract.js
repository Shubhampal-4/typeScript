"use strict";
class animal {
    move() {
        console.log("The Animal is Moving....");
    }
}
class Dog extends animal {
    makeSound() {
        console.log("Woof Woof....");
    }
}
class Cat extends animal {
    makeSound() {
        console.log("Meow Meow....");
    }
}
const dog = new Dog;
dog.makeSound();
dog.move();
const cat = new Cat;
cat.makeSound();
cat.move();
