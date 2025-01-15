"use strict";
class Animal {
    makeSound() {
        console.log("some generic Sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof Woof...");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meow Meow...");
    }
}
const animals = [new Animal(), new Dog(), new Cat()];
animals.forEach((animal) => {
    animal.makeSound();
});
