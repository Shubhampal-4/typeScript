class Animal {
    makeSound():void{
        console.log("some generic Sound");
    }
}
class Dog extends Animal{
    makeSound(): void {
        console.log("Woof Woof...");
    }
}
class Cat extends Animal{
    makeSound(): void {
        console.log("Meow Meow...");
    }
}
const animals = [new Animal(),new Dog(),new Cat()]
animals.forEach((animal)=>{
    animal.makeSound()
})