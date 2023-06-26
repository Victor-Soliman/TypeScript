function add(n1, n2){
    return n1 + n2;
}

console.log(add(10,"20"));
console.log(typeof add(10,"20"));

console.log("---------");

function showData(name= "Un", age,country){
    return `${name} - ${age} - ${country}`
}
console.log(showData(undefined,40,"Egypt"));

