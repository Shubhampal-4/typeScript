abstract class animal {
    abstract makeSound():void
    move():void{
        console.log("The Animal is Moving....");
    }
}
class Dog extends animal{
    makeSound(): void {
        console.log("Woof Woof....");
    }
}
class Cat extends animal{
    makeSound(): void {
        console.log("Meow Meow....")
    }
}

const dog = new Dog
dog.makeSound()
dog.move()

const cat = new Cat
cat.makeSound()
cat.move()