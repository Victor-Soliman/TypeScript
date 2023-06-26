/*
  Data Types
  - Type Alias
*/

type st = string;

let aName: st = "Elzero";
aName = "Nasr";
// aName = 100;

type standnum = string | number;
let al: standnum = 10;
al = 100;
al = "Nasr";
// al = true;

console.log("=====");

/*
  Data Types
  - Advanced Type Alias
*/

type Buttons = {
    up: string ,
    right: string ,
    down: string ,
    left: string
}
function getActions(btns: Buttons){
    console.log(`Actions For Button Up Is ${btns.up}`);
    console.log(`Actions For Button Right Is ${btns.right}`);
    console.log(`Actions For Button Down Is ${btns.down}`);
    console.log(`Actions For Button Left Is ${btns.left}`);
}


getActions({up: "Go Up", right: "Go Right", down:"Go Down", left:"Go Left"});

console.log("--");

type last = Buttons & {
    x : boolean
}

function getActionss(btns: last){
    console.log(`Actions For Button Up Is ${btns.up}`);
    console.log(`Actions For Button Right Is ${btns.right}`);
    console.log(`Actions For Button Down Is ${btns.down}`);
    console.log(`Actions For Button Left Is ${btns.left}`);
}

getActionss({up: "Go Up", right: "Go Right", down:"Go Down", left:"Go Left", x: true});

console.log("=====");

/*
  Data Types
  - Literal Types
*/
// it can be used when your function returns a specifed data that you can use it in the type you declare


type nums = 0 | 1 | -1 ;

function compare(num1: number , num2: number) : nums {
    if(num1 === num2) {
        return 0;
    } else if (num1 > num2) {
        return 1;
    } else {
        return -1 ;
    }
}

console.log(compare(20,20)); // 0
console.log(compare(20,15)); // 1
console.log(compare(20,30)); // -1

let myNumber1 : nums = 0 ;
let myNumber2 : nums = 1 ;
let myNumber3 : nums = -1 ;
// let myNumber4 : nums = 100 ;

console.log("=====");

/*
  Data Types
  - Tuple
  --- Is Another Sort Of Array Type
  --- We know Exactly How Many Elements It Contains
  --- We Know Which Types It Contains At Specific Positions
*/

let article : readonly [number , string , boolean] = [11, "Title One" , true];
article = [12, "Title Two", false];
// article.push(100);  // if there was not read only : you could have been able to add to the array

console.log(article);

const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);

console.log("=====");

/*
  Data Types
  - Void
  --- Function That Will Return Nothing
  --- Function In JavaScript That Not Return A Value Will Show undefined
  --- undefined is not void
  - Never
  --- Return Type Never Returns
  --- The Function Doesn't Have A Normal Completion
  --- It Throws An Error Or Never Finishes Running At All "Infinite Loop"
*/

function logging(msg: string) : void {
    console.log(msg);
    return;
}

console.log(logging("I am a Message"));
console.log("Test");

const fail = (msg: string) => {
    throw new Error(msg);
    return 10;
}

function alwaysLog(name) : never {
    while(true) {
        console.log(name);
    }
}

// this line is commented because it will always print the name
// alwaysLog("Nasr");
console.log("Test");

console.log("=====");
/*
  Data Types
  - Enums => Enumerations
  --- Allow Us To Declare A Set Of Named Constants
  --- Used For Logical Grouping Collection Of Constants "Collection Of Related Values"
  --- It Organize Your Code
  --- By Default Enums Are Number-Based, First Element Is 0
  --- Theres A Numeric Enums
  --- Theres A String-Based Enums
  --- Theres Heterogeneous Enums [String + Number]
*/

const KIDS = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;

function getHardSeconds(): number {
    return 3;
}

 enum Level {
    Kid = 15,
    Easy = 9,
    Medium = Easy - 3,
    Hard = getHardSeconds()
}

let lvl:string = "Easy";

if(lvl === "Easy"){
    console.log(`The Level Is ${lvl} and number of seconds Is ${Level.Easy}`)
}

console.log("=====");

enum Kids {
    Five = 25,
    Seven = 20,
    Ten = 15
}

if(lvl === "Easy"){
    console.log(`The Level Is ${lvl} and number of seconds Is ${Level.Kid}`)
}
if(lvl === "Easy"){
    console.log(`The Level Is ${lvl} and number of seconds Is ${Level.Medium}`)
}
if(lvl === "Easy"){
    console.log(`The Level Is ${lvl} and number of seconds Is ${Level.Hard}`)
}

console.log("=====");

/*
  Data Types
  - Type Assertions
  --- Sometime Compiler Doesnt Know The Information We Do
  --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
*/

// // let myImg = document.getElementById("my-img") as HTMLImageElement;
// let myImg = <HTMLImageElement> document.getElementById("my-img") ;
// console.log(myImg.src);
// // console.log(myImg.value);

// let myImg1 = document.getElementById("my-img") as HTMLInputElement;
// console.log(myImg1.value);
// // console.log(myImg1.href);

let data: any = "1000";
// let data: any = 1000; // this will throw an error
console.log((data as string).repeat(3));

console.log("=====");
/*
  Data Types
  - Union And Intersection Types
  --- Union Type
  ------ The | Symbol Is Used To Create The Union => "Or"

  --- Intersection Type
  ------ Is A Type That Combines Several Types Into One
  ------ The & Symbol Is Used To Create An Intersection => "And"

  --- If A Union Is An OR, Then An Intersection Is An AND.
*/

// let all1 : string | number = 100;

type A = {
    one: string,
    two: number,
    three: boolean
}

type B = A & {
    four:  number
}

type C = {
    five : boolean
}

type mix = A & C;

function getActionsss(btns: mix){
    console.log(`Hello ${btns.one}`);
    console.log(`Hello ${btns.two}`);
    console.log(`Hello ${btns.three}`);
    console.log(`Hello ${btns.five}`);


}

getActionsss({one:"String",two:100,three:true,five:true});

console.log("=====");

/*
  Type Annotations With Object
*/

let myObject:{
   readonly username: string,
    id:number,
    hire?:boolean,
    skills: {
        one:string,
        two:string
    }
} = {
    username: "Nasr",
    hire: true,
    id: 100,
    
    skills: {
        one: "HTML",
        two: "CSS"
    }
}

// myObject.username = "Soliman";
myObject.id = 1;
myObject.hire = false;

console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skills.one);
console.log(myObject);