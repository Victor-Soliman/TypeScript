"use strict";
let theName = "Nasr";
let theAge = 40;
let hire = true;
let all = "nana";
let allVars;
theName = "Soliman";
all = 100;
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(10, 20));
console.log(typeof add(10, 20));
console.log("---------");
let everything = "Nasr";
everything = "Nasr";
everything = 10;
everything = true;
let myFriends = ["Nasr", "Marius", "Joe"];
for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i].repeat(3));
}
console.log("---------");
let arrayOne = [1, 2, 3, 4, 5];
let arrayTwo = ["A", "B", "C"];
let arrayThree = [1, 2, 3, 4, "A", "B", "C"];
let arrayFour = [1, 2, 3, 4, "A", "B", ["C", "D"], true, false];
console.log(arrayFour);
console.log("---------");
let showMsg = true;
function showDetails(name, age, salary) {
    let test = 10;
    if (showMsg) {
        return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test Variable ${test}`;
    }
    return `No Data to show`;
}
console.log(showDetails("Nasr", 29, 5000));
console.log("---------");
function showData(name, age, country) {
    return `${name} - ${age} - ${country}`;
}
console.log(showData());
console.log(showData("Nasr", 29, "Romania"));
console.log("---------");
function addAll(...nums) {
    let result = 0;
    nums.forEach(num => {
        result += num;
    });
    return result;
}
console.log(addAll(10, 20, 30, 100, 10.5, +true));
console.log("---------");
const addNumber = function (num1, num2) {
    return num1 + num2;
};
console.log(addNumber(10, 20));
const addWithArrow = (num1, num2) => num1 + num2;
console.log(addWithArrow(20, 10));
console.log("---------");
//# sourceMappingURL=typeAnnotation.js.map