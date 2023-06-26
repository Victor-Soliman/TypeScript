let theName = "Nasr";
let theAge: number = 40;
let hire: boolean = true;
let all:any = "nana";
let allVars; //any


theName = "Soliman";
all = 100;

function add(n1: number, n2:number){
    return n1 + n2;
}

console.log(add(10,20));
console.log(typeof add(10,20));
console.log("---------");
// type annotation with array
let everything : string | number | boolean = "Nasr";

everything = "Nasr";
everything = 10;
everything = true;

let myFriends: string[] = ["Nasr","Marius","Joe"]
for(let i = 0 ; i < myFriends.length ; i++){
    console.log(myFriends[i].repeat(3));
}

console.log("---------");
// type annotation with Multidimensional Arrays

let arrayOne: number[] = [1,2,3,4,5];
let arrayTwo: string[] = ["A","B","C"];
let arrayThree: (string | number)[] = [1,2,3,4,"A","B","C"];

let arrayFour: (string | number | string[] | boolean)[] = [1,2,3,4,"A","B", ["C","D"],true,false];
console.log(arrayFour);

console.log("---------");
/*
  Type Annotations With Functions
  in tsconfig.json -> 

  - noImplicitAny

  - noImplicitReturns
  --- Will Check All Code Paths In A Function To Ensure They Return A Value

  - noUnusedLocals
  --- Report Errors On Unused Local Variables

  - noUnusedParameters
  --- Report Errors On Unused Parameters In Functions.
*/  
let showMsg = true;
function showDetails(name: string, age: number, salary: number):  string{
    let test = 10;
    if(showMsg){
        return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test Variable ${test}`
    }
    return `No Data to show`;
}
console.log(showDetails("Nasr",29, 5000));

console.log("---------");
/*
  Function
  - Optional and Default Parameters

  - In JavaScript, Every Parameter Is Optional => "undefined" If You Didnt Use It
  - "?" Optional Parameter
*/
function showData(name?:string , age?:number,country?:string){
    return `${name} - ${age} - ${country}`
}
console.log(showData())
console.log(showData("Nasr",29,"Romania"))

console.log("---------");
/*
  Function
  - Rest Parameter
  - What About Float => All Is Under Type Number
*/
function addAll(...nums: number[]): number{
    let result = 0;
    // for(let i = 0 ; i < nums.length ; i++){
    //     result += nums[i];
    // }
    nums.forEach(num => {
        result += num
    });
    return result;
}
console.log(addAll(10,20,30,100,10.5,+true));

console.log("---------");
/*
  Function
  - Anonymous Function
  - Arrow Function
*/
const addNumber = function(num1: number , num2: number) : number {
    return num1 + num2;
}

console.log(addNumber(10,20));

const addWithArrow = (num1: number , num2: number) : number => num1 + num2;

console.log(addWithArrow(20,10));

console.log("---------");
