/*
  Interface
  - Interface Declaration
  --- Serve Like Types
  --- The Interface Describes The Shape Of An Object
  --- It Defines The Syntax To Follow

  --- Use With Object
  --- Use With Function
  --- Use Read Only And Optional Operator
*/
/*
  Interface
  - Interface Method And Parameters
*/
interface User {
    id ?: number ,
    readonly username: string,
    country: string,
    sayHello() :string,
    sayWelcom: () => string,
    getDouble(num : number) : number 
}

let user: User = {
    id : 100,
    username : "Nasr",
    country : "Romania",
    sayHello() {
        return `Hello ${this.username}`
    },
    sayWelcom: () => {
        return `Welcome ${user.username}`;
    },
    getDouble(n) {
        return n * 2;
    }

}

user.country= "Syria"
// user.username= "aName"  // you can't edit the username because it is readonly

console.log(user)

function getData(data: User){
    console.log(`Id Is ${data.id}`);
    console.log(`UserName Is ${data.username}`);
    console.log(`Country Is ${data.country}`);
}

// getData({id:200, username: "Soliman", country:"USA"})

console.log("----------")
console.log(user.id);
console.log(user.sayHello());
console.log(user.sayWelcom());
console.log(user.getDouble(100));

console.log("----------")
/*
  Interface
  - ReOpen The Interface And Use Cases
*/

// Homepage
interface Settings {
    readonly theme: boolean;
    font: string;
}

// Articles Page
interface Settings {
    sidebar: boolean;
}

// Contact Page
interface Settings {
    external: boolean;
}

let userSettings: Settings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true
}

console.log("----------")
/*
  Interface
  - Extending Interfaces
*/
interface _User {
    id: number,
    username: string,
    country: string
}

interface _Moderator {
    role: string | number;
}

interface _Admin extends _User, _Moderator{
    protect?: boolean;
}

let _user : _Admin = {
    id: 100,
    username: "Nasr",
    country: "Romaina",
    role: "Mod",
    protect: true
}

// Interfaces are different than type, because in interface you can extends another interface(multiple interface), but in type you can't do that

console.log("--------")
/*
  Type Annotations With Class
*/
class Auser {
     username: string;
     salary: number;
    msg: () => string;

    constructor(username: string, salary: number) {
        this.username = username;
        this.salary = salary;
        this.msg = function () {
            return `Hello ${this.username}, Your salary is ${this.salary}`;
        }
    }

    sayMsg() {
        return `Hello ${this.username}, Your salary is ${this.salary}`;
    }
}


let userOne = new Auser("Nasr", 6000);

// console.log(userOne.username);   // private filed
// console.log(userOne.salary);   // protected filed
console.log(userOne.msg());
console.log(userOne.sayMsg());

console.log("--------");

/*
  Class
  - Data Access Modifiers & Parameters Properties
  --- Public
  ------ All Members Of A Class In TypeScript Are Public
  ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
  --- Private
  ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
  --- Protected
  ------ Same Like Private But Can Be Accessed Using The Deriving Class

  - TypeScript Is A Layer On Top Of JavaScript
  - It Should Remove All Annotations And Although Access Modifiers "Private For Example"

  - Getter & Setter
*/


class Buser {

    msg: () => string;
// the _ brfore the username , you can use it as a convention to say that it is a private filed, in case you don't 
// have a private keyword in your language 
    constructor(private _username: string,protected salary: number,public readonly address) {
        this.msg = function () {
            return `Hello ${this._username}, Your salary is ${this.salary}, and you live in ${address}`;
        }
    }

    sayMsg() {
        return `Hello ${this._username}, Your salary is ${this.salary}, and you live in ${this.address}`;
    }

    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
}


let userTwo = new Buser("Nasr", 6000,"Bucharest");

// console.log(userTwo.username);   // private filed
// console.log(userTwo.salary);   // protected filed

console.log(userTwo.username);   
userTwo.username = "Mark";

console.log(userTwo.msg());
console.log(userTwo.sayMsg());

console.log("--------");

/*
  Class
  - Static Members
  --- Don't Use "name, length, call"
*/
class CUser {
  private static created: number = 0;
   static getCount() : void {
        console.log(`${this.created} Objects Created`)
    }
    constructor(public username: string){
        CUser.created++;
    }
}

let u1 = new CUser("Elzero");
let u2 = new CUser("Web");
let u3 = new CUser("School");

// console.log(CUser.created)  // private filed can't be accessed outside the class

CUser.getCount();

console.log("--------");

/*
  Class
  - Implement Interface
*/
interface ASettings {
    theme: boolean;
    font?: string;
    save(): void;
}

class XUser implements ASettings {
    constructor(public username: string,public theme: boolean,public font: string) {} 
    save(): void{
        console.log(`Saved`);
    }
    update(){
        console.log(`Updated`);
    }
}

let useer = new XUser("Nasr", true, "Open Sans" );

console.log(useer.username);
console.log(useer.theme);
console.log(useer.font);

useer.save();
useer.update();

console.log("--------");
