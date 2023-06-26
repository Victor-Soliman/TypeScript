/*
  Class
  - Abstract Classes And Members
  --- We Cannot Create An Instance Of An Abstract Class
*/

abstract class Food {
    constructor(public title: string){}
    abstract getCockingTime(): void;
}

class Pizza extends Food {
    constructor(title: string , public price: number){
        super(title);
    }
    getCockingTime(): void{
        console.log("Coocking Time For Pizza Is 1 Hour");
    }
}

class Burger extends Food {
    constructor(title: string , public price: number){
        super(title);
    }
    getCockingTime(): void{
        console.log("Coocking Time For Pizza Is Half Hour");
    }
}

let pizzaOne = new Pizza("Pipperoni", 100);
console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCockingTime();

console.log("------")

/*
  Class
  - Polymorphism & Method Override

  - Polymorphism
  --- Classes Have The Same Methods But Different Implementations

  - Method Override
  --- Allowing Child Class To Provide Implementation Of A Method In Parent Class
  --- A Method In Child Class Must Have Same Name As Parent Class

  --- noImplicitOverride
*/

class Player {
    constructor(public name: string){}
    attack(){
        console.log("Attacking Now");
    }
}

class Amazon extends Player {
    constructor(name: string, public spears: number){
        super(name);
    }
    override attack(): void {
        // super.attack();
        console.log("Attacking with Spear");
        this.spears -= 1;
    }
}


class Barberian extends Player {
    constructor(name: string, public axeDurability: number){
        super(name);
    }
    override attack(): void {
        // super.attack();
        console.log("Attacking with Axe");
        this.axeDurability -= 1;
    }
}

let barberianOne = new Barberian("Nasr",100);
console.log(barberianOne.name);
barberianOne.attack();
console.log(barberianOne.axeDurability);

console.log("------")

/*
  Generics
  - Help Write A Reusable Code
  - Allow To Pass Type As A Parameter To Another Type
  - You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
  - We Can Create:
  --- Generic Classes
  --- Generic Functions
  --- Generic Methods
  --- Generic Interfaces
*/
function returnNumber(val: number): number {
    return val;
}

function returnString(val: string): string{
    return val;
}

function returnBoolean(val: boolean): boolean{
    return val;
}

console.log(returnNumber(100));
console.log(returnString("Nasr"));
console.log(returnBoolean(true));

function returnType<T>(val: T): T{
    return val;
}

console.log(returnType<number>(100));
console.log(returnType<string>("Nasr"));
console.log(returnType<boolean>(true));
console.log(returnType<number[]>([1,2,3,4]));

console.log("------")

/*
  Generics
  - Arrow Function
  - Multiple Types
*/
const returnTypeArrowSyntax = <T>(val: T): T => val;

console.log(returnTypeArrowSyntax<number>(1000));
console.log(returnTypeArrowSyntax<string>("Soliman"));

function testType<T>(val: T): string{
    return `The Value Is ${val} And Type Is ${typeof val}`;
}

console.log(testType<number>(1000));
console.log(testType<string>("Soliman"));

function multipleTypes<T, S>(valueOne: T, valueTwo: S): string{
    return `The first Value Is ${valueOne} And second Value Is ${typeof valueTwo}`;
}

console.log(multipleTypes<string, number>("Nasr",1000));
console.log(multipleTypes<string, boolean>("Soliman", true));

console.log("------")

class User<T = string> {
    constructor(public value: T){}
    show(msg: T): void {
        console.log(`${msg} - ${this.value}`)
    }
}

let firstUser = new User<string>("Nasr");
console.log(firstUser.value);
firstUser.show("Message");

let secondUser = new User<number | string>(100);
console.log(secondUser.value);
secondUser.show("Message 2");

